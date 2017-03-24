import { StyleManager } from "./StyleManager";
/**
 * Class for StyleTweenHelper.
 */
export declare class StyleTweenHelper {
    private _isFillDirty;
    private _fillColorRGBA;
    private _isStrokeDirty;
    private _strokeWidth;
    private _strokeColorRGBA;
    private _isShadowDirty;
    private _shadowBlur;
    private _shadowOffset;
    private _shadowColorRGBA;
    draw(styleManager: StyleManager): void;
    fillColorRGBA: string;
    fillColorR: number;
    fillColorG: number;
    fillColorB: number;
    fillColorA: number;
    strokeWidth: number;
    strokeColorRGBA: string;
    strokeColorR: number;
    strokeColorG: number;
    strokeColorB: number;
    strokeColorA: number;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowColorRGBA: string;
    shadowColorR: number;
    shadowColorG: number;
    shadowColorB: number;
    shadowColorA: number;
}
