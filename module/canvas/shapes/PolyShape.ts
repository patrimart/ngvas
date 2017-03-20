
import { Line, BezierCurve, QuadraticCurve, ShapeType } from "./interfaces";
import { BaseStyle }                                    from "../styles/BaseStyle";


/**
 * Draws a filled and/or stroked polygon.
 */
export class PolyShape extends BaseStyle {

    private _sidesCollection: Array<Line | BezierCurve | QuadraticCurve> = [];


    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "PolyShape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }


    public get type () { return ShapeType.SHAPE; }

    public get width () { return this.boundary.width; }

    public get height () { return this.boundary.height; }



    public addLine (line: Line): this {
        this._sidesCollection.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) { this.originToCenter = true; }
        return this;
    }

    public addBezier (curve: BezierCurve): this {
        this._sidesCollection.push(curve);
        const [p1, cp1, cp2, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        if (this.originToCenter) { this.originToCenter = true; }
        return this;
    }

    public addQuadratic (curve: QuadraticCurve): this {
        this._sidesCollection.push(curve);
        const [p1, cp1, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) { this.originToCenter = true; }
        return this;
    }

    public clear (): this {
        this.boundary.reset();
        this._sidesCollection = [];
        return this;
    }



    public traceShape (ctx: CanvasRenderingContext2D): void {

        if (this._sidesCollection.length < 2) {
            throw new ReferenceError(`PolyShape (${this.name}) must have at least two sides.`);
        }
        const [[x, y], ] = this._sidesCollection[0];
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);

        this._sidesCollection.forEach(s => {
            // Line
            if (s.length === 2) {
                const [, [x2, y2]] = s;
                ctx.lineTo(x2 - this.originX, y2 - this.originY);
            // Quadratic
            } else if (s.length === 3) {
                const [, [x2, y2], [x3, y3]] = s.slice(0, 3);
                ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);
            // Bezier
            } else if (s.length === 4) {
                const [, [x2, y2], [x3, y3], [x4, y4]] = s.slice(0, 4);
                ctx.bezierCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY, x4 - this.originX, y4 - this.originY);
            }
        });

        ctx.closePath();
        if (this.styleManager.hasFill) { ctx.fill(); }
        if (this.styleManager.hasStroke) { ctx.stroke(); }
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
