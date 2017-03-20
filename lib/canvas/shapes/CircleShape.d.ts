import { TweenFunc } from "../tweens/interfaces";
import { ShapeType } from "./interfaces";
import { BaseStyle } from "../styles/BaseStyle";
/**
 * Draws a filled and/or stroked circle.
 */
export declare class CircleShape extends BaseStyle {
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    width: number;
    height: number;
    radius: number;
    withRadius(r: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
