
import { BaseStyle }                 from "../styles/BaseStyle";
import { ShapeType, QuadraticCurve } from "./interfaces";


/**
 * Draws a stroked line.
 */
export class QuadraticCurveShape extends BaseStyle {

    private _curves: QuadraticCurve[] = [];

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "QuadraticCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.SHAPE; }


    public get numCurves (): number {
        return this._curves.length;
    }

    public addCurve (curve: QuadraticCurve): this {
        this._curves.push(curve);
        const [p1, cp1, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) { this.originToCenter = true; }
        return this;
    }

    public clear (): this {
        super.clear();
        this._curves = [];
        return this;
    }


    public traceShape (ctx: CanvasRenderingContext2D): void {

        if (this._curves.length < 1) {
            throw new ReferenceError(`QuadraticCurveShape (${this.name}) must have at least one Point.`);
        }

        const [[[x, y], [x2, y2], [x3, y3]], ...curvesTo] = this._curves;
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);

        if (curvesTo !== undefined) {
            curvesTo.forEach(([, [_x2, _y2], [_x3, _y3]]) =>
                ctx.quadraticCurveTo(_x2 - this.originX, _y2 - this.originY, _x3 - this.originX, _y3 - this.originY)
            );
        }
        if (this.styleManager.hasFill) { ctx.fill(); }
        if (this.styleManager.hasStroke) { ctx.stroke(); }
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
