
import { Input, Output, EventEmitter } from "@angular/core";

import { ComposeOverlay, ColorStyle, LineJoin, LineCap } from "../canvas/styles/interfaces";
import { BaseStyle, BaseStyleConstructor }               from "../canvas/styles/BaseStyle";
import { ConstraintFunction }                            from "../canvas/constraints/interfaces";
import { PixelHitArea }                                  from "../canvas/hit-area/PixelHitArea";

import { TweenInput } from "./interfaces";


/**
 * The base class for all shape components.
 */
export abstract class NgvasBaseComponent <S extends BaseStyle> {

    private _shape: S;
    private _delayedSetters: Array<(s: S) => void> = [];

    @Input("name")
    public name: string;

    @Input("active")
    public set active (a: boolean) { this.execOrDelay(s => s.isActive = a); };

    @Input("visible")
    public set visible (v: boolean) { this.execOrDelay(s => s.isVisible = v); };

    @Input("x")
    public set x (x: number) { this.execOrDelay(s => s.x = x); };

    @Input("y")
    public set y (y: number) { this.execOrDelay(s => s.y = y); };

    @Input("origin")
    public set origin (xy: [number, number] | "center") {
        if (xy === "center") {
            this.execOrDelay(s => s.originToCenter = true);
        } else {
            this.execOrDelay(s => {
                s.originX = xy[0];
                s.originY = xy[1];
            });
        }
    };

    @Input("width")
    public set width (w: number) { this.execOrDelay(s => s.width = w); };

    @Input("height")
    public set height (h: number) { this.execOrDelay(s => s.height = h); };

    @Input("rotation")
    public set rotation (r: number) { this.execOrDelay(s => s.rotation = r); };


    /////////////////////////////////////////////
    // TWEENER INPUTS

    @Input("scale")
    public set scale (v: TweenInput<S, [number, number]>) {

        if (typeof v[0] === "number") {
            const [x, y] = v as [number, number];
            this.execOrDelay(s => s.scale(x, y));
        } else if (Array.isArray(v[0])) {
            const [ [x, y], duration, tween, callback ] = v as any;
            this.execOrDelay(s => s.scale(x, y, duration, tween, callback));
        }
    }

    @Input("size")
    public set size (v: TweenInput<S, [number, number]>) {

        if (typeof v[0] === "number") {
            const [w, h] = v as [number, number];
            this.execOrDelay(s => s.resize(w, h));
        } else if (Array.isArray(v[0])) {
            const [ [w, h], duration, tween, callback ] = v as any;
            this.execOrDelay(s => s.resize(w, h, duration, tween, callback));
        }
    }

    @Input("skew")
    public set skew (v: TweenInput<S, [number, number]>) {

        if (typeof v[0] === "number") {
            const [x, y] = v as [number, number];
            this.execOrDelay(s => s.skew(x, y));
        } else if (Array.isArray(v[0])) {
            const [ [x, y], duration, tween, callback ] = v as any;
            this.execOrDelay(s => s.skew(x, y, duration, tween, callback));
        }
    }

    @Input("rotate")
    public set rotate (v: TweenInput<S, number>) {

        if (typeof v === "number") {
            const r = v as number;
            this.execOrDelay(s => s.rotate(r));
        } else if (Array.isArray(v[0])) {
            const [ r, duration, tween, callback ] = v as any;
            this.execOrDelay(s => s.rotate(r, duration, tween, callback));
        }
    }

    @Input("translate")
    public set translate (v: TweenInput<S, [number, number]>) {

        if (typeof v[0] === "number") {
            const [x, y] = v as [number, number];
            this.execOrDelay(s => s.translate(x, y));
        } else if (Array.isArray(v[0])) {
            const [ [x, y], duration, tween, callback ] = v as any;
            this.execOrDelay(s => s.translate(x, y, duration, tween, callback));
        }
    }

    @Input("animate")
    public set animate (f: ((shape: S) => boolean) | undefined) {
        if (f === undefined) {
            this.execOrDelay(s => s.removeAnimationFunction());
        } else {
            this.execOrDelay(s => s.setAnimationFunction(f));
        }
    }

    @Input("constrain")
    public set constrain (fs: ConstraintFunction[] | undefined) {
        if (fs === undefined) {
            this.execOrDelay(s => s.withConstraint());
        } else {
            this.execOrDelay(s => s.withConstraint(...fs));
        }
    }


    /////////////////////////////////////////////
    // HIT AREA

    @Input("hitArea")
    public set hitArea (Clazz: typeof PixelHitArea) {
        this.execOrDelay(s => s.withHitArea(Clazz));
    }


    /////////////////////////////////////////////
    // STYLE INPUTS

    @Input("opacity")
    public set opacity (alpha: number) {
        this.execOrDelay(s => s.opacity = alpha);
    }

    @Input("compose")
    public set compose (c: { alpha?: number, overlay?: ComposeOverlay }) {
        this.execOrDelay(s => s.compose(c.alpha, c.overlay));
    }

    @Input("fill")
    public set fill (st: TweenInput<S, ColorStyle>) {
        if (Array.isArray(st)) {
            this.execOrDelay(s => s.withFill(st[0], st[1], st[2], st[3]));
        } else {
            this.execOrDelay(s => s.withFill(st));
        }
    }

    @Input("stroke")
    public set stroke (st: TweenInput<S, { width: number, style: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number }>) {
        if (Array.isArray(st)) {
            this.execOrDelay(s => {
                s.withStroke(st[0].width, st[0].style, st[0].join, st[0].cap, st[0].dashOffset);
                s.withStroke(st[0].width, st[0].style, st[1], st[2], st[3]);
            });
        } else {
            this.execOrDelay(s => s.withStroke(st.width, st.style, st.join, st.cap, st.dashOffset));
        }
    }

    @Input("shadow")
    public set shadow (sh: TweenInput<S, { blur: number, color: string, offsetX: number, offsetY: number }>) {
        if (Array.isArray(sh)) {
            this.execOrDelay(s => s.withShadow(sh[0].blur, sh[0].color, sh[0].offsetX, sh[0].offsetY, sh[1], sh[2], sh[3]));
        } else {
            this.execOrDelay(s => s.withShadow(sh.blur, sh.color, sh.offsetX, sh.offsetY));
        }
    }

    @Input("click")
    public set click (listener: any) {
        if (listener !== undefined) {
            this.execOrDelay(shape => shape.addEventListener("click", s => { this.clickEvent.emit(s); }));
        }
    }
    @Output("click")
    public clickEvent = new EventEmitter<S>();


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
