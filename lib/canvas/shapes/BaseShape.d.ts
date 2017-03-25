import { IShape, ShapeType, ContextTransformer } from "./interfaces";
import { IConstrainable, ConstraintFunction } from "../constraints/interfaces";
import { IHitArea, HitAreaConstructor } from "../hit-area/interfaces";
import { PixelHitArea } from "../hit-area/PixelHitArea";
import { ITraceable } from "../styles/interfaces";
import { TweenFunc } from "../tweens/interfaces";
import { TweenManager } from "../tweens/TweenManager";
import { Boundary } from "../Boundary";
export declare type BaseShapeConstructor<T> = {
    new (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string): T;
};
/**
 * BaseShape abstract class.
 *
 * protected canvas: HTMLCanvasElement
 * protected ctx: CanvasRenderingContext2D
 * protected tweenManager: TweenManager
 * protected boundary: Boundary
 * protected customDraw (ctxt?: ContextTransformer): void
 */
export declare abstract class BaseShape implements IShape, ITraceable, IConstrainable {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    private _name;
    private _aniFunc;
    private _hitArea;
    private _constraints;
    private _eventHandlers;
    private _currentCtxt;
    private _x;
    private _y;
    private _originX;
    private _originY;
    private _rotation;
    private _scaleX;
    private _scaleY;
    private _skewX;
    private _skewY;
    private _isActive;
    private _isVisible;
    private _originToCenter;
    protected _clipShape: BaseShape | undefined;
    protected tweenManager: TweenManager;
    protected boundary: Boundary;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, _name?: string);
    protected abstract customDraw(ctxt?: ContextTransformer): void;
    readonly abstract type: ShapeType;
    abstract traceShape(ctx: CanvasRenderingContext2D): void;
    readonly name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    originX: number;
    originY: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    isActive: boolean;
    isVisible: boolean;
    originToCenter: boolean;
    getBoundary(): Boundary;
    readonly hitArea: IHitArea | undefined;
    readonly contextTransform: ContextTransformer;
    origin(x: number, y: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    resize(w: number, h?: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    rotate(deg: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    scale(x: number, y?: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    skew(x: number, y?: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    translate(x: number, y: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    draw(ctxt: ContextTransformer): void;
    setAnimationFunction(f: (shape: this) => boolean): void;
    removeAnimationFunction(): void;
    isHit(x: number, y: number): boolean;
    withClip(clipShape?: BaseShape): this;
    withConstraint(...func: ConstraintFunction[]): this;
    withHitArea<H extends IHitArea>(Clazz: typeof PixelHitArea): this;
    withHitArea<H extends IHitArea>(Clazz: HitAreaConstructor<H>, offset?: number): this;
    addEventListener(event: string, listener: (e: Event) => void): void;
    removeEventListener(event: string): void;
    clear(): this;
}
