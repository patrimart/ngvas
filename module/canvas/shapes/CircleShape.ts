
import { TweenFunc } from "../tweens/interfaces";
import { ShapeType } from "./interfaces";
import { BaseStyle } from "../styles/BaseStyle";


const MathPIx2 = 6.2832; // 2 * Math.PI;

/**
 * Draws a filled and/or stroked circle.
 */
export class CircleShape extends BaseStyle {


    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "Circle_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.SHAPE; }

    public set width (v: number) { throw new ReferenceError(`LineShape width cannot be set (${v}).`); }
    public set height (v: number) { throw new ReferenceError(`LineShape height cannot be set (${v}).`); }


    public set radius (r: number) {
        this.boundary.reset();
        this.boundary.setPoint([-r, -r]);
        this.boundary.setPoint([r, r]);
        if (this.originToCenter) { this.originToCenter = true; }
    }

    public get radius () {
        return super.width / 2;
    }

    public withRadius (r: number, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        } else {
            this.radius = r;
        }
        return this;
    }



    public traceShape (ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, MathPIx2);
        if (this.styleManager.hasFill) { ctx.fill(); }
        if (this.styleManager.hasStroke) { ctx.stroke(); }
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
