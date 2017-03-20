
import { TweenFunc } from "../tweens/interfaces";
import { ShapeType } from "./interfaces";
import { BaseStyle } from "../styles/BaseStyle";


const DEG_TO_ANGLE = 0.017453; // Math.PI / 180

/**
 * Draws a filled and/or stroked arc.
 */
export class ArcShape extends BaseStyle {

    private _angleDegree = 180;
    private _connectToCenter = false;


    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "Arc_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.LINE; }


    public set radius (r: number) {
        this.boundary.reset();
        this.boundary.setPoint([-r, -r]);
        this.boundary.setPoint([r, r]);
        if (this.originToCenter) { this.originToCenter = true; }
    }

    public get radius () {
        return this.width / 2;
    }

    public set angle (deg: number) {
        this._angleDegree = Math.max(0, Math.min(360, deg));
    }
    public get angle () {
        return this._angleDegree;
    }

    public withRadius (r: number, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        } else {
            this.radius = r;
        }
        return this;
    }

    public withAngle (deg: number, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["angle"], callback, 10);
        } else {
            this.angle = deg;
        }
        return this;
    }

    public connectToCenter (c: boolean): this {
        this._connectToCenter = c;
        return this;
    }



    public traceShape (ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        if (this._connectToCenter) {
            ctx.moveTo(0 - this.originX, 0 - this.originY);
        }
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, DEG_TO_ANGLE * this._angleDegree);
        if (this._connectToCenter) {
            ctx.lineTo(0 - this.originX, 0 - this.originY);
        }
        if (this.styleManager.hasFill) { ctx.fill(); }
        if (this.styleManager.hasStroke) { ctx.stroke(); }
    }

    public clear (): this {
        super.clear();
        this._angleDegree = 180;
        this._connectToCenter = false;
        return this;
    }

    protected customDraw (): void {
        this.traceShape(this.ctx);
    }
}
