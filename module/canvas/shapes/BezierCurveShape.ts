
import { BaseStyle }              from "../styles/BaseStyle";
import { BezierCurve, ShapeType } from "./interfaces";
import { Boundary }               from "../Boundary";


/**
 * Draws a stroked line.
 */
export class BezierCurveShape extends BaseStyle {

    private _curves: BezierCurve[] = [];
    private _boundary = new Boundary();

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "BezierCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.LINE; }

    public get width () { return this._boundary.width; }

    public get height () { return this._boundary.height; }



    public get numCurves (): number {
        return this._curves.length;
    }

    public addCurve (curve: BezierCurve): this {
        this._curves.push(curve);
        const [p1, cp1, cp2, p2] = curve;
        this._boundary.setPoint(p1);
        this._boundary.setPoint(p2);
        this._boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
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
            throw new ReferenceError(`BezierCurveShape (${this.name}) must have at least one Point.`);
        }

        const [[[x, y], [x2, y2], [x3, y3], [x4, y4]], ...curvesTo] = this._curves;
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.bezierCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY, x4 - this.originX, y4 - this.originY);

        if (curvesTo !== undefined) {
            curvesTo.forEach(([, [_x2, _y2], [_x3, _y3], [_x4, _y4]]) =>
                ctx.bezierCurveTo(_x2 - this.originX, _y2 - this.originY, _x3 - this.originX, _y3 - this.originY, _x4 - this.originX, _y4 - this.originY)
            );
        }
        if (this.styleManager.hasFill) { ctx.fill(); }
        if (this.styleManager.hasStroke) { ctx.stroke(); }
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
