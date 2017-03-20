
import {
    IComposeStyle, IFillStyle, IStrokeStyle,
    ComposeOverlay, ColorStyle, LineJoin, LineCap, TextAlign, TextBaseline
} from "./interfaces";

import { ContextTransformer } from "../shapes/interfaces";
import { BaseShape }          from "../shapes/BaseShape";
import { StyleManager }       from "./StyleManager";
import { TweenFunc }          from "../tweens/interfaces";

import { parseColorStyle, toRgbaString } from "./color-style-parser";


export type BaseStyleConstructor<T> = { new (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string): T };

/**
 * Draws a filled and/or stroked rectangle.
 */
export abstract class BaseStyle extends BaseShape implements IComposeStyle, IFillStyle, IStrokeStyle {

    protected styleManager: StyleManager;

    private _fillColorRGBA: [number, number, number, number] = [0, 0, 0, 1];
    private _strokeColorRGBA: [number, number, number, number] = [0, 0, 0, 1];
    private _shadowColorRGBA: [number, number, number, number] = [0, 0, 0, 1];


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
        if (duration > 1) {
            const vals = parseColorStyle(style);
            const props = [ "fillColorR", "fillColorG", "fillColorB", "fillColorA" ];
            this.tweenManager.addTween(this, tween, duration, vals, props, callback);
        } else {
            style = typeof style === "number" ? `#${style.toString(16)}` : style;
            this.fillColorRGBA = parseColorStyle(style);
            this.styleManager.withFill(style);
        }
        return this;
    }


    public withStroke (width?: number, style?: ColorStyle, duration?: number, tween?: TweenFunc, callback?: (shape: this) => void): this;
    public withStroke (width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number): this;
    public withStroke (...args: any[]): this {
        if (typeof args[2] === "number" && args[2] > 1) {
            const vals = [ args[0] | 0, ...parseColorStyle(args[1]) ];
            const props = [ "strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA" ];
            this.tweenManager.addTween(this, args[3], args[2], vals, props, args[4]);
        } else {
            let [ width, style, join, cap, dashOffset, miterLimit ] = args;
            style = typeof style === "number" ? `#${style.toString(16)}` : style;
            this.strokeColorRGBA = parseColorStyle(style);
            this.styleManager.withStroke(width, style, join, cap, dashOffset, miterLimit);
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
            this.tweenManager.addTween(this, tween, duration, vals, props, callback);
        } else {
            color = typeof color === "number" ? `#${color.toString(16)}` : color;
            this.shadowColorRGBA = parseColorStyle(color);
            this.styleManager.withShadow(blur, color, offsetX, offsetY);
        }
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


    /////////////////////////////////////////////
    // TWEEN HELPERS

    private set fillColorRGBA (rgba: [number, number, number, number]) {
        this._fillColorRGBA = rgba;
    }
    private get fillColorRGBA (): [number, number, number, number] {
        return this._fillColorRGBA;
    }

    private set fillColorR (r: number) {
        this._fillColorRGBA[0] = r | 0;
    }
    private get fillColorR (): number {
        return this._fillColorRGBA[0];
    }

    private set fillColorG (g: number) {
        this._fillColorRGBA[1] = g | 0;
    }
    private get fillColorG (): number {
        return this._fillColorRGBA[1];
    }

    private set fillColorB (b: number) {
        this._fillColorRGBA[2] = b | 0;
    }
    private get fillColorB (): number {
        return this._fillColorRGBA[2];
    }

    private set fillColorA (a: number) {
        this._fillColorRGBA[3] = a;
        this.styleManager.withFill(toRgbaString(this._fillColorRGBA));
    }
    private get fillColorA (): number {
        return this._fillColorRGBA[3];
    }



    private set strokeColorRGBA (rgba: [number, number, number, number]) {
        this._strokeColorRGBA = rgba;
        console.log(this._strokeColorRGBA);
    }
    private get strokeColorRGBA (): [number, number, number, number] {
        return this._strokeColorRGBA;
    }

    private set strokeColorR (r: number) {
        this._strokeColorRGBA[0] = r | 0;
    }
    private get strokeColorR (): number {
        return this._strokeColorRGBA[0];
    }

    private set strokeColorG (g: number) {
        this._strokeColorRGBA[1] = g | 0;
    }
    private get strokeColorG (): number {
        return this._strokeColorRGBA[1];
    }

    private set strokeColorB (b: number) {
        this._strokeColorRGBA[2] = b | 0;
    }
    private get strokeColorB (): number {
        return this._strokeColorRGBA[2];
    }

    private set strokeColorA (a: number) {
        this._strokeColorRGBA[3] = a;
        this.styleManager.withFill(toRgbaString(this._strokeColorRGBA));
    }
    private get strokeColorA (): number {
        return this._strokeColorRGBA[3];
    }



    private set shadowColorRGBA (rgba: [number, number, number, number]) {
        this._shadowColorRGBA = rgba;
        console.log(this._shadowColorRGBA);
    }
    private get shadowColorRGBA (): [number, number, number, number] {
        return this._shadowColorRGBA;
    }

    private set shadowColorR (r: number) {
        this._shadowColorRGBA[0] = r | 0;
    }
    private get shadowColorR (): number {
        return this._shadowColorRGBA[0];
    }

    private set shadowColorG (g: number) {
        this._shadowColorRGBA[1] = g | 0;
    }
    private get shadowColorG (): number {
        return this._shadowColorRGBA[1];
    }

    private set shadowColorB (b: number) {
        this._shadowColorRGBA[2] = b | 0;
    }
    private get shadowColorB (): number {
        return this._shadowColorRGBA[2];
    }

    private set shadowColorA (a: number) {
        this._shadowColorRGBA[3] = a;
        this.styleManager.withFill(toRgbaString(this._shadowColorRGBA));
    }
    private get shadowColorA (): number {
        return this._shadowColorRGBA[3];
    }
}
