import { TweenFunc } from "../tweens/interfaces";
import { ShapeType } from "./interfaces";
import { BaseStyle } from "../styles/BaseStyle";
/**
 * Draws a filled and/or stroked arc.
 */
export declare class ArcShape extends BaseStyle {
    private _angleDegree;
    private _connectToCenter;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    radius: number;
    angle: number;
    withRadius(r: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    withAngle(deg: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    connectToCenter(c: boolean): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    clear(): this;
    protected customDraw(): void;
}
