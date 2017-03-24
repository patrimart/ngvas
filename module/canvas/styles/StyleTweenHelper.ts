
import { StyleManager }                  from "./StyleManager";
import { parseColorStyle, toRgbaString } from "./color-style-parser";

/**
 * Class for StyleTweenHelper.
 */
export class StyleTweenHelper {

    private _isFillDirty = false;
    private _fillColorRGBA: [number, number, number, number] = [0, 0, 0, 1];

    private _isStrokeDirty = false;
    private _strokeWidth = 0;
    private _strokeColorRGBA: [number, number, number, number] = [0, 0, 0, 1];

    private _isShadowDirty = false;
    private _shadowBlur = 0;
    private _shadowOffset: [ number, number ] = [ 0, 0 ];
    private _shadowColorRGBA: [number, number, number, number] = [0, 0, 0, 1];


    public draw (styleManager: StyleManager): void {

        if (this._isFillDirty) {
            styleManager.withFill(toRgbaString(this._fillColorRGBA));
        }

        if (this._isStrokeDirty) {
            styleManager.withStroke(this._strokeWidth, toRgbaString(this._strokeColorRGBA));
        }

        if (this._isShadowDirty) {
            styleManager.withShadow(this._shadowBlur, toRgbaString(this._shadowColorRGBA), this._shadowOffset[0], this._shadowOffset[1]);
        }

        this._isFillDirty = false;
        this._isStrokeDirty = false;
        this._isShadowDirty = false;
    }


    // "fillColorR", "fillColorG", "fillColorB", "fillColorA"

    public set fillColorRGBA (rgba: string) {
        this._fillColorRGBA = parseColorStyle(rgba);
        this._isFillDirty = true;
    }
    public get fillColorRGBA (): string {
        return toRgbaString(this._fillColorRGBA);
    }

    public set fillColorR (r: number) {
        this._fillColorRGBA[0] = r | 0;
        this._isFillDirty = true;
    }
    public get fillColorR (): number {
        return this._fillColorRGBA[0];
    }

    public set fillColorG (g: number) {
        this._fillColorRGBA[1] = g | 0;
        this._isFillDirty = true;
    }
    public get fillColorG (): number {
        return this._fillColorRGBA[1];
    }

    public set fillColorB (b: number) {
        this._fillColorRGBA[2] = b | 0;
        this._isFillDirty = true;
    }
    public get fillColorB (): number {
        return this._fillColorRGBA[2];
    }

    public set fillColorA (a: number) {
        this._fillColorRGBA[3] = a;
        this._isFillDirty = true;
        // this.styleManager.withFill(toRgbaString(this._fillColorRGBA));
    }
    public get fillColorA (): number {
        return this._fillColorRGBA[3];
    }


    // "strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"

    public set strokeWidth (w: number) {
        this._strokeWidth = w;
        this._isStrokeDirty = true;
    }
    public get strokeWidth (): number {
        return this._strokeWidth;
    }

    public set strokeColorRGBA (rgba: string) {
        this._strokeColorRGBA = parseColorStyle(rgba);
        this._isStrokeDirty = true;
    }
    public get strokeColorRGBA (): string {
        return toRgbaString(this._strokeColorRGBA);
    }

    public set strokeColorR (r: number) {
        this._strokeColorRGBA[0] = r | 0;
        this._isStrokeDirty = true;
    }
    public get strokeColorR (): number {
        return this._strokeColorRGBA[0];
    }

    public set strokeColorG (g: number) {
        this._strokeColorRGBA[1] = g | 0;
        this._isStrokeDirty = true;
    }
    public get strokeColorG (): number {
        return this._strokeColorRGBA[1];
    }

    public set strokeColorB (b: number) {
        this._strokeColorRGBA[2] = b | 0;
        this._isStrokeDirty = true;
    }
    public get strokeColorB (): number {
        return this._strokeColorRGBA[2];
    }

    public set strokeColorA (a: number) {
        this._strokeColorRGBA[3] = a;
        this._isStrokeDirty = true;
        // this.styleManager.withStroke(this._strokeWidth, toRgbaString(this._strokeColorRGBA));
    }
    public get strokeColorA (): number {
        return this._strokeColorRGBA[3];
    }


    // "shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"

    public set shadowBlur (b: number) {
        this._shadowBlur = Math.max(0, b);
        this._isShadowDirty = true;
    }
    public get shadowBlur (): number {
        return this._shadowBlur;
    }

    public set shadowOffsetX (x: number) {
        this._shadowOffset[0] = x;
        this._isShadowDirty = true;
    }
    public get shadowOffsetX (): number {
        return this._shadowOffset[0];
    }

    public set shadowOffsetY (y: number) {
        this._shadowOffset[1] = y;
        this._isShadowDirty = true;
    }
    public get shadowOffsetY (): number {
        return this._shadowOffset[1];
    }

    public set shadowColorRGBA (rgba: string) {
        this._shadowColorRGBA = parseColorStyle(rgba);
        this._isShadowDirty = true;
    }
    public get shadowColorRGBA (): string {
        return toRgbaString(this._shadowColorRGBA);
    }

    public set shadowColorR (r: number) {
        this._shadowColorRGBA[0] = r | 0;
        this._isShadowDirty = true;
    }
    public get shadowColorR (): number {
        return this._shadowColorRGBA[0];
    }

    public set shadowColorG (g: number) {
        this._shadowColorRGBA[1] = g | 0;
        this._isShadowDirty = true;
    }
    public get shadowColorG (): number {
        return this._shadowColorRGBA[1];
    }

    public set shadowColorB (b: number) {
        this._shadowColorRGBA[2] = b | 0;
        this._isShadowDirty = true;
    }
    public get shadowColorB (): number {
        return this._shadowColorRGBA[2];
    }

    public set shadowColorA (a: number) {
        this._shadowColorRGBA[3] = a;
        this._isShadowDirty = true;
    }
    public get shadowColorA (): number {
        return this._shadowColorRGBA[3];
    }
}
