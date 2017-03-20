import { IShape } from "../shapes/interfaces";
/**************************************
 * Style Interfaces
 */
export declare type ComposeOverlay = "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
export declare type ColorStyle = number | string | CanvasGradient | CanvasPattern;
export declare type LineJoin = "miter" | "bevel" | "round";
export declare type LineCap = "butt" | "round" | "square";
export declare type TextAlign = "left" | "right" | "center" | "start" | "end";
export declare type TextBaseline = "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
export interface IComposeStyle {
    opacity: number;
    compose(alpha?: number, overlay?: ComposeOverlay): this;
}
export interface IFillStyle {
    withFill(style?: ColorStyle): this;
}
export interface IShadowStyle {
    withShadow(blur?: number, color?: string, offsetX?: number, offsetY?: number): this;
}
export interface IStrokeStyle {
    withStroke(width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number): this;
}
export interface ITextStyle {
    withText(text: string): this;
    textStyle(font?: string, align?: TextAlign, baseline?: TextBaseline): this;
}
export interface IStyleCache {
    begin(): void;
    end(): void;
}
export interface ITraceable extends IShape {
    traceShape(ctx: CanvasRenderingContext2D): void;
}
