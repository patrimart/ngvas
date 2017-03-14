
import { Input, Output, EventEmitter } from "@angular/core";

import { ComposeOverlay, ColorStyle, LineJoin, LineCap } from "../canvas/styles/interfaces";
import { TweenFunc }                       from "../canvas/tweens/interfaces";
import { BaseStyle, BaseStyleConstructor } from "../canvas/styles/BaseStyle";
import { ConstraintFunction }              from "../canvas/constraints/interfaces";
import { PixelHitArea }                    from "../canvas/hit-area/PixelHitArea";

/**
 * The base class for all shape components.
 */
export abstract class NgvasBaseComponent <S extends BaseStyle> {

    private _shape: S;
    private _delayedSetters: Array<(s: S) => void> = [];


    @Input("name")
    public name: string;

    @Input("active")
    public set active (a: boolean) { this.execOrDelay((s: S) => s.isActive = a); };

    @Input("visible")
    public set visible (v: boolean) { this.execOrDelay((s: S) => s.isVisible = v); };

    @Input("xy")
    public set xy (xy: [number, number]) { this.execOrDelay((s: S) => { s.x = xy[0]; s.y = xy[1]; }); };

    @Input("origin")
    public set origin (xy: [number, number] | "center") {
        if (xy === "center") {
            this.execOrDelay((s: S) => s.originToCenter());
        } else {
            this.execOrDelay((s: S) => { s.originX = xy[0]; s.originY = xy[1]; });
        }
    };

    @Input("width")
    public set width (w: number) { this.execOrDelay((s: S) => s.width = w); };

    @Input("height")
    public set height (h: number) { this.execOrDelay((s: S) => s.height = h); };

    @Input("rotation")
    public set rotation (r: number) { this.execOrDelay((s: S) => s.rotation = r); };

    @Input("scale")
    public set scale (xy: [number, number] | number) {
        if (typeof xy === "number") {
            this.execOrDelay((s: S) => { s.scaleX = xy; s.scaleY = xy; });
        } else {
            this.execOrDelay((s: S) => { s.scaleX = xy[0]; s.scaleY = xy[1]; });
        }
    };

    @Input("skew")
    public set skew (xy: [number, number]) { this.execOrDelay((s: S) => { s.skewX = xy[0]; s.skewY = xy[1]; }); };



    @Input("scaler")
    public set scaler (v: [[number, number | undefined], number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: S) => s.scale(v[0][0], v[0][1], v[1], v[2]));
    }

    @Input("sizer")
    public set sizer (v: [[number, number | undefined], number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: S) => s.resize(v[0][0], v[0][1], v[1], v[2]));
    }

    @Input("skewer")
    public set skewer (v: [[number, number | undefined], number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: S) => s.skew(v[0][0], v[0][1], v[1], v[2]));
    }

    @Input("rotater")
    public set rotater (v: [number, number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: S) => s.rotate(v[0], v[1], v[2]));
    }

    @Input("mover")
    public set mover (v: [[number, number | undefined], number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: S) => s.translate(v[0][0], v[0][1], v[1], v[2]));
    }

    @Input("animator")
    public set animator (f: ((shape: S) => boolean) | undefined) {
        if (f === undefined) {
            this.execOrDelay((s: S) => s.removeAnimationFunction());
        } else {
            this.execOrDelay((s: S) => s.setAnimationFunction(f));
        }
    }

    @Input("constrainer")
    public set constrainer (fs: ConstraintFunction[] | undefined) {
        if (fs === undefined) {
            this.execOrDelay((s: S) => s.withConstraint());
        } else {
            this.execOrDelay((s: S) => s.withConstraint(...fs));
        }
    }

    @Input("hitArea")
    public set hitArea (Clazz: typeof PixelHitArea) {
        this.execOrDelay((s: S) => s.withHitArea(Clazz));
    }


    @Input("opacity")
    public set opacity (alpha: number) {
        this.execOrDelay((s: S) => s.opacity = alpha);
    }

    @Input("compose")
    public set compose (c: { alpha?: number, overlay?: ComposeOverlay }) {
        this.execOrDelay((s: S) => s.compose(c.alpha, c.overlay));
    }

    @Input("fill")
    public set fill (st: ColorStyle | undefined) {
        this.execOrDelay((s: S) => s.withFill(st));
    }

    @Input("stroke")
    public set stroke (st: { width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number }) {
        this.execOrDelay((s: S) => s.withStroke(st.width, st.style, st.join, st.cap, st.dashOffset));
    }

    @Input("shadow")
    public set shadow (sh: { blur?: number, color?: string, offsetX?: number, offsetY?: number }) {
        this.execOrDelay((s: S) => s.withShadow(sh.blur, sh.color, sh.offsetX, sh.offsetY));
    }

    // @Input("click")
    // public set click (listener: any) {
    //     this.execOrDelay((s: S) => s.addEventListener("click", () =>));
    // }

    @Output("click")
    public clickEvent = new EventEmitter<MouseEvent>();


    @Output("shape")
    public shapeOut = new EventEmitter<S>();


    public constructor (
        private Clazz: BaseStyleConstructor<S>,
    ) {}


    public getShape (): S | undefined {
        return this._shape;
    }


    public initShape(ctx: CanvasRenderingContext2D): S {

        if (this._shape !== undefined) {
            return this._shape;
        }

        this._shape = new this.Clazz(ctx.canvas, ctx, this.name);

        this._delayedSetters.forEach(f => f(this._shape));
        this._delayedSetters = [];
        this.shapeOut.emit(this._shape);
        return this._shape;
    }


    protected execOrDelay (f: (s: S) => void) {
        this._shape ? f(this._shape) : this._delayedSetters.push(f);
    }
}
