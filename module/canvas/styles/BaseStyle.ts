
import {
    IComposeStyle, IFillStyle, IStrokeStyle,
    ComposeOverlay, ColorStyle, LineJoin, LineCap, TextAlign, TextBaseline
} from "./interfaces";

import { ContextTransformer } from "../shapes/interfaces";
import { BaseShape }          from "../shapes/BaseShape";
import { StyleManager }       from "./StyleManager";
import { TweenFunc }          from "../tweens/interfaces";

import { parseColorStyle }  from "./color-style-parser";
import { StyleTweenHelper } from "./StyleTweenHelper";


export type BaseStyleConstructor<T> = { new (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string): T };

/**
 * Draws a filled and/or stroked rectangle.
 */
export abstract class BaseStyle extends BaseShape implements IComposeStyle, IFillStyle, IStrokeStyle {

    protected styleManager: StyleManager;

    private _styleTweenHelper = new StyleTweenHelper();


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


    public withFill (style?: ColorStyle, duration = 0, tween?: TweenFunc, callback?: (shape: this) => void): this {
        if (duration > 1 && style !== undefined) {
            const vals = parseColorStyle(style);
            const props = [ "fillColorR", "fillColorG", "fillColorB", "fillColorA" ];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        } else {
            style = typeof style === "number" ? `#${style.toString(16)}` : style;
            if (typeof style === "string") { this._styleTweenHelper.fillColorRGBA = style; }
            this.styleManager.withFill(style);
        }
        return this;
    }


    public withStroke (width: number, style: ColorStyle, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    public withStroke (width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number): this;
    public withStroke (...args: any[]): this {
        if (typeof args[2] === "number" && args[2] > 1) {
            const vals = [ args[0] | 0, ...parseColorStyle(args[1]) ];
            const props = [ "strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA" ];
            this.tweenManager.addTween(this._styleTweenHelper, args[3], args[2], vals, props, args[4]);
        } else {
            let [ width, style, join, cap, dashOffset, miterLimit ] = args;
            if (width !== undefined) { this._styleTweenHelper.strokeWidth = width; }
            if (style !== undefined) { this._styleTweenHelper.strokeColorRGBA = style; }
            this.styleManager.withStroke(undefined, undefined, join, cap, dashOffset, miterLimit);
        }
        return this;
    }


    public withShadow (
        blur: number, color: string | number, offsetX: number, offsetY: number,
        duration = 0, tween?: TweenFunc, callback?: (shape: this) => void,
    ): this {
        if (duration > 1) {
            const vals = [ blur, ...parseColorStyle(color), offsetX, offsetY ];
            const props = [ "shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY" ];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        } else {
            color = typeof color === "number" ? `#${color.toString(16)}` : color;
            this._styleTweenHelper.shadowBlur = blur;
            this._styleTweenHelper.shadowColorRGBA = color;
            this._styleTweenHelper.shadowOffsetX = offsetX;
            this._styleTweenHelper.shadowOffsetY = offsetY;
        }
        return this;
    }


    public textStyle (font?: string, align?: TextAlign, baseline?: TextBaseline): this {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }


    public draw (ctxt: ContextTransformer) {
        this.styleManager.begin();
        this._styleTweenHelper.draw(this.styleManager);
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
