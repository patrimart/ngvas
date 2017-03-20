import { ComposeOverlay, ColorStyle, LineJoin, LineCap, TextAlign, TextBaseline, IStyleCache, IComposeStyle, IFillStyle, IShadowStyle, IStrokeStyle, ITextStyle } from "./interfaces";
export declare class StyleManager implements IStyleCache, IComposeStyle, IFillStyle, IShadowStyle, IStrokeStyle, ITextStyle {
    private ctx;
    private ctxValues;
    constructor(ctx: CanvasRenderingContext2D);
    readonly hasFill: boolean;
    readonly hasStroke: boolean;
    readonly lineWidth: number;
    opacity: number;
    compose(alpha?: number, overlay?: ComposeOverlay): this;
    withFill(style?: ColorStyle): this;
    withStroke(width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number): this;
    withShadow(blur?: number, color?: string, offsetX?: number, offsetY?: number): this;
    withText(): never;
    textStyle(font?: string, align?: TextAlign, baseline?: TextBaseline): this;
    begin(): void;
    end(): void;
    clear(): void;
}
