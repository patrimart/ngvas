import { IComposeStyle, IFillStyle, IStrokeStyle, ComposeOverlay, ColorStyle, LineJoin, LineCap, TextAlign, TextBaseline } from "./interfaces";
import { ContextTransformer } from "../shapes/interfaces";
import { BaseShape } from "../shapes/BaseShape";
import { StyleManager } from "./StyleManager";
import { TweenFunc } from "../tweens/interfaces";
export declare type BaseStyleConstructor<T> = {
    new (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string): T;
};
/**
 * Draws a filled and/or stroked rectangle.
 */
export declare abstract class BaseStyle extends BaseShape implements IComposeStyle, IFillStyle, IStrokeStyle {
    protected styleManager: StyleManager;
    private _styleTweenHelper;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    isVisible: boolean;
    opacity: number;
    compose(alpha?: number, overlay?: ComposeOverlay): this;
    withFill(style?: ColorStyle, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    withStroke(width: number, style: ColorStyle, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    withStroke(width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number): this;
    withShadow(blur: number, color: string | number, offsetX: number, offsetY: number, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    textStyle(font?: string, align?: TextAlign, baseline?: TextBaseline): this;
    draw(ctxt: ContextTransformer): void;
    clear(): this;
}
