
import { BaseStyle }       from "../styles/BaseStyle";
import { Line, ShapeType } from "./interfaces";


/**
 * Draws a stroked line.
 */
export class LineShape extends BaseStyle {

    private _linePoints: Line[] = [];

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "Line_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.LINE; }

    public set width (v: number) { throw new ReferenceError(`LineShape width cannot be set (${v}).`); }
    public set height (v: number) { throw new ReferenceError(`LineShape height cannot be set (${v}).`); }



    public addLine (line: Line): this {
        this._linePoints.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) { this.originToCenter = true; }
        return this;
    }

    public clear (): this {
        super.clear();
        this._linePoints = [];
        return this;
    }



    public traceShape (ctx: CanvasRenderingContext2D): void {

        if (this._linePoints.length < 1) {
            throw new ReferenceError(`LineShape (${this.name}) must have at least one line.`);
        }

        ctx.beginPath();
        this._linePoints.forEach(([[x, y], [x2, y2]], i) => {
            if (i === 0) {
                ctx.moveTo(x - this.originX, y - this.originY);
            }
            ctx.lineTo(x2 - this.originX, y2 - this.originY);
        });
        if (this.styleManager.hasFill) { ctx.fill(); }
        if (this.styleManager.hasStroke) { ctx.stroke(); }
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
