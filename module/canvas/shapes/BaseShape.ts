
import { IShape, ShapeType, ContextTransformer } from "./interfaces";
import { IConstrainable, ConstraintFunction }    from "../constraints/interfaces";
import { IHitArea, HitAreaConstructor }          from "../hit-area/interfaces";
import { PixelHitArea }                          from "../hit-area/PixelHitArea";
import { ITraceable }                            from "../styles/interfaces";
import { TweenFunc }                             from "../tweens/interfaces";
import { TweenManager }                          from "../tweens/TweenManager";
import { Boundary }                              from "../Boundary";


const DEG_TO_ANGLE = 0.017453; // Math.PI / 180

export type BaseShapeConstructor<T> = { new (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string): T };

/**
 * BaseShape abstract class.
 *
 * protected canvas: HTMLCanvasElement
 * protected ctx: CanvasRenderingContext2D
 * protected tweenManager: TweenManager
 * protected boundary: Boundary
 * protected customDraw (ctxt?: ContextTransformer): void
 */
export abstract class BaseShape implements IShape, ITraceable, IConstrainable {

    private _aniFunc: (shape: IShape) => boolean;

    private _hitArea: IHitArea;
    private _constraints: ConstraintFunction[] = [];
    protected _clipShape: BaseShape | undefined;

    private _currentCtxt: ContextTransformer = {
        scaleX : 0, scaleY : 0,
        skewX  : 0, skewY  : 0,
        moveX  : 0, moveY  : 0,
        rotate : 0,
    };

    private _x = 0;
    private _y = 0;
    private _originX = 0;
    private _originY = 0;
    private _rotation = 0;
    private _scaleX = 1.0;
    private _scaleY = 1.0;
    private _skewX = 0;
    private _skewY = 0;
    private _isActive = true;
    private _isVisible = true;

    protected tweenManager = new TweenManager();
    protected boundary = new Boundary();


    public constructor (
        protected canvas: HTMLCanvasElement,
        protected ctx: CanvasRenderingContext2D,
        private _name = "Shape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {}

    protected abstract customDraw (ctxt?: ContextTransformer): void;

    public abstract get type (): ShapeType;

    // public abstract addPoints (...points: Point[]): this;
    // public abstract getPoints (): Point[];
    public abstract traceShape (ctx: CanvasRenderingContext2D): void;


    public get name () { return this._name; }

    public set x (v: number) { this._x = v; }
    public get x () { return this._x; }

    public set y (v: number) { this._y = v; }
    public get y () { return this._y; }

    public set width (v: number) {
        this.boundary.setPoint([0, 0]);
        this.boundary.setPoint([v, 0]);
    }
    public get width () { return this.boundary.width; }

    public set height (v: number) {
        this.boundary.setPoint([0, 0]);
        this.boundary.setPoint([0, v]);
    }
    public get height () { return this.boundary.height; }

    public set originX (v: number) { this._originX = v; }
    public get originX () { return this._originX; }

    public set originY (v: number) { this._originY = v; }
    public get originY () { return this._originY; }

    public set rotation (v: number) { this._rotation = v; }
    public get rotation () { return this._rotation; }

    public set scaleX (v: number) { this._scaleX = v; }
    public get scaleX () { return this._scaleX; }

    public set scaleY (v: number) { this._scaleY = v; }
    public get scaleY () { return this._scaleY; }

    public set skewX (v: number) { this._skewX = v; }
    public get skewX () { return this._skewX; }

    public set skewY (v: number) { this._skewY = v; }
    public get skewY () { return this._skewY; }

    public set isActive (v: boolean) { this._isActive = v; }
    public get isActive () { return this._isActive; }

    public set isVisible (v: boolean) { this._isVisible = v; }
    public get isVisible () { return this._isVisible; }


    public getBoundary (): Boundary {
        return this.boundary.clone();
    }

    public get hitArea (): IHitArea | undefined { return this._hitArea; }

    public get contextTransform (): ContextTransformer { return Object.assign({}, this._currentCtxt); }


    public origin (x: number, y: number, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["originX", "originY"], callback);
        } else {
            this.originX = x;
            this.originY = y;
        }
        return this;
    }

    public originToCenter (): this {
        return this.origin(this.width / 2, this.height / 2);
    }

    public resize (w: number, h = w, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [w, h], ["width", "height"], callback);
        } else {
            this.width = w;
            this.height = h;
        }
        return this;
    }

    public rotate (deg: number, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["rotation"], callback);
        } else {
            this.rotation += deg;
        }
        return this;
    }

    public scale (x: number, y = x, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["scaleX", "scaleY"], callback);
        } else {
            this.scaleX += x;
            this.scaleY += y;
        }
        return this;
    }

    public skew (x: number, y = x, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["skewX", "skewY"], callback);
        } else {
            this.skewX += x;
            this.skewY += y;
        }
        return this;
    }

    public translate (x: number, y: number, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["x", "y"], callback);
        } else {
            this.x += x;
            this.y += y;
        }
        return this;
    }


    public draw (ctxt: ContextTransformer): void {

        if (this.isActive) {
            if (this._aniFunc !== undefined && ! this._aniFunc(this)) {
                this._aniFunc = undefined;
            }
            this.tweenManager.tween();
            this._constraints.forEach(c => c(this));
        }

        if (this.isVisible) {
            this._currentCtxt.scaleX = ctxt.scaleX * this.scaleX;
            this._currentCtxt.scaleY = ctxt.scaleY * this.scaleY;
            this._currentCtxt.skewX = ctxt.skewX + this.skewX;
            this._currentCtxt.skewY = ctxt.skewY + this.skewY;
            this._currentCtxt.moveX = ctxt.moveX + this.x;
            this._currentCtxt.moveY = ctxt.moveY + this.y;
            this._currentCtxt.rotate = ctxt.rotate + this.rotation;

            this.ctx.setTransform(
                this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY,
                this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY,
            );
            this.ctx.rotate(this._currentCtxt.rotate * DEG_TO_ANGLE);

            if (this._clipShape !== undefined) {
                const c = this._clipShape;
                // this.ctx.save();
                this.ctx.setTransform(
                    this._currentCtxt.scaleX * c.scaleX, this._currentCtxt.skewX + c.skewX, this._currentCtxt.skewY + c.skewY,
                    this._currentCtxt.scaleY * c.scaleY, this._currentCtxt.moveX + c.x, this._currentCtxt.moveY + c.y,
                );
                this.ctx.rotate(c.rotation * DEG_TO_ANGLE);
                this._clipShape.customDraw(this._currentCtxt);
                // this.ctx.restore();
                this.ctx.clip();
                this.ctx.setTransform(
                    this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY,
                    this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY,
                );
                this.ctx.rotate(-c.rotation * DEG_TO_ANGLE);
            }

            this.customDraw(this._currentCtxt);
            // this.ctx.rotate(-this._currentCtxt.rotate * DEG_TO_ANGLE);
            // this.ctx.setTransform(ctxt.scaleX, ctxt.skewX, ctxt.skewY, ctxt.scaleY, ctxt.moveX, ctxt.moveY);
        }
    }

    public setAnimationFunction (f: (shape: this) => boolean): void {
        this._aniFunc = f;
    }


    public removeAnimationFunction (): void {
        this._aniFunc = undefined;
    }


    public isHit (x: number, y: number): boolean {
        if (this.hitArea === undefined) { return false; }
        return this.hitArea.isHit(x, y, this._currentCtxt, this);
    }


    public withClip(clipShape?: BaseShape): this {
        this._clipShape = clipShape;
        return this;
    }


    public withConstraint (...func: ConstraintFunction[]): this {
        this._constraints = func;
        return this;
    }


    public withHitArea <H extends IHitArea> (Clazz: typeof PixelHitArea): this;
    public withHitArea <H extends IHitArea> (Clazz: HitAreaConstructor<H>, offset?: number): this;
    public withHitArea (...args: any[]): this {

        const Clazz = args[0];
        if (Clazz === PixelHitArea && args[1] !== undefined) {
            this._hitArea = new PixelHitArea(this.canvas.width, this.canvas.height);
        } else if (typeof Clazz === "function") {
            const offset: number = args[1] || 1;
            this._hitArea = new Clazz(this.canvas.width, this.canvas.height, offset);
        } else {
            throw new ReferenceError("The first parameter must implement the IHitArea interface.");
        }

        return this;
    }


    public addEventListener (event: string, listener: (s: this, t?: string, e?: MouseEvent) => void): void {

        const rect = this.canvas.getBoundingClientRect();
        this.canvas.addEventListener(event, (evt: MouseEvent) => {

            if (this._hitArea !== undefined && this.isVisible &&  this.isHit(evt.clientX - rect.left, evt.clientY - rect.top)) {
                listener(this, event, evt);
            }

        }, false);
    }


    public clear (): this {
        this._originX = 0;
        this._originY = 0;
        this.tweenManager.clear();
        this.boundary.reset();
        return this;
    }
}
