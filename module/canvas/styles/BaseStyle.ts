
import {
    IComposeStyle, IFillStyle, IStrokeStyle,
    ComposeOverlay, ColorStyle, LineJoin, LineCap, TextAlign, TextBaseline
} from "./interfaces";

import { ContextTransformer } from "../shapes/interfaces";
import { BaseShape }          from "../shapes/BaseShape";
import { StyleManager }       from "./StyleManager";


export type BaseStyleConstructor<T> = { new (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string): T };

/**
 * Draws a filled and/or stroked rectangle.
 */
export abstract class BaseStyle extends BaseShape implements IComposeStyle, IFillStyle, IStrokeStyle {

    protected styleManager: StyleManager;

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name?: string,
    ) {
        super (canvas, ctx, name);
        this.styleManager = new StyleManager(this.ctx);
    }

    public set isVisible (v: boolean) {
        super.isVisible = v;
    }

    public get isVisible (): boolean {
        return (this.styleManager.hasFill || this.styleManager.hasStroke) && this.ctx.globalAlpha > 0 && super.isVisible;
    }

    public set opacity (alpha: number) {
        this.styleManager.opacity = alpha;
    }

    public get opacity () {
        return this.styleManager.opacity;
    }

    public compose(alpha?: number, overlay?: ComposeOverlay): this {
        this.styleManager.compose(alpha, overlay);
        return this;
    }

    public withFill (style?: ColorStyle): this {
        this.styleManager.withFill(style);
        return this;
    }

    public withStroke (width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number): this {
        this.styleManager.withStroke(width, style, join, cap, dashOffset, miterLimit);
        return this;
    }

    public withShadow (blur?: number, color?: string, offsetX?: number, offsetY?: number): this {
        this.styleManager.withShadow(blur, color, offsetX, offsetY);
        return this;
    }

    public textStyle (font?: string, align?: TextAlign, baseline?: TextBaseline): this {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }


    public draw (ctxt: ContextTransformer) {
        this.styleManager.begin();
        super.draw(ctxt);
        this.styleManager.end();
    }


    public clear (): this {
        super.clear();
        this.styleManager.clear();
        super.isVisible = true;
        return this;
    }
}
