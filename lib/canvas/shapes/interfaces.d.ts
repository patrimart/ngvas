import { TweenFunc } from "../tweens/interfaces";
import { Boundary } from "../Boundary";
/**************************************
 * Shape Interfaces
 */
export declare type Point = [number, number];
export declare type Line = [Point, Point];
export declare type QuadraticCurve = [Point, Point, Point];
export declare type BezierCurve = [Point, Point, Point, Point];
export interface ContextTransformer {
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    moveX: number;
    moveY: number;
    rotate: number;
}
export declare enum ShapeType {
    EMPTY = 0,
    GROUP = 1,
    IMAGE = 2,
    LINE = 3,
    SHAPE = 4,
    TEXT = 5,
}
export interface IShapeProps {
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
}
export interface IShape extends IShapeProps {
    readonly type: ShapeType;
    readonly name: string;
    isVisible: boolean;
    isActive: boolean;
    originToCenter: boolean;
    getBoundary(): Boundary;
    origin(x: number, y: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    resize(w: number, h: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    rotate(deg: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    scale(x: number, y: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    skew(x: number, y: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    translate(x: number, y: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    draw(ctxt: ContextTransformer): void;
    traceShape(ctx: CanvasRenderingContext2D): void;
    clear(): this;
}
export interface IClippable extends IShape {
    withClip(clipShape: IShape): this;
}
