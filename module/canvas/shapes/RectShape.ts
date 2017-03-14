
import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType } from "./interfaces";

/**
 * Draws a filled and/or stroked rectangle.
 */
export class RectShape extends BaseStyle {


    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "Rect_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.SHAPE; }

    public traceShape (ctx: CanvasRenderingContext2D): void {

        if (this.styleManager.hasFill) {
            ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
        if (this.styleManager.hasStroke) {
            ctx.strokeRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
