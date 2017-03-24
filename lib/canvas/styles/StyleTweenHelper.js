"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_style_parser_1 = require("./color-style-parser");
/**
 * Class for StyleTweenHelper.
 */
class StyleTweenHelper {
    constructor() {
        this._isFillDirty = false;
        this._fillColorRGBA = [0, 0, 0, 1];
        this._isStrokeDirty = false;
        this._strokeWidth = 0;
        this._strokeColorRGBA = [0, 0, 0, 1];
        this._isShadowDirty = false;
        this._shadowBlur = 0;
        this._shadowOffset = [0, 0];
        this._shadowColorRGBA = [0, 0, 0, 1];
    }
    draw(styleManager) {
        if (this._isFillDirty) {
            styleManager.withFill(color_style_parser_1.toRgbaString(this._fillColorRGBA));
        }
        if (this._isStrokeDirty) {
            styleManager.withStroke(this._strokeWidth, color_style_parser_1.toRgbaString(this._strokeColorRGBA));
        }
        if (this._isShadowDirty) {
            styleManager.withShadow(this._shadowBlur, color_style_parser_1.toRgbaString(this._shadowColorRGBA), this._shadowOffset[0], this._shadowOffset[1]);
        }
        this._isFillDirty = false;
        this._isStrokeDirty = false;
        this._isShadowDirty = false;
    }
    // "fillColorR", "fillColorG", "fillColorB", "fillColorA"
    set fillColorRGBA(rgba) {
        this._fillColorRGBA = color_style_parser_1.parseColorStyle(rgba);
        this._isFillDirty = true;
    }
    get fillColorRGBA() {
        return color_style_parser_1.toRgbaString(this._fillColorRGBA);
    }
    set fillColorR(r) {
        this._fillColorRGBA[0] = r | 0;
        this._isFillDirty = true;
    }
    get fillColorR() {
        return this._fillColorRGBA[0];
    }
    set fillColorG(g) {
        this._fillColorRGBA[1] = g | 0;
        this._isFillDirty = true;
    }
    get fillColorG() {
        return this._fillColorRGBA[1];
    }
    set fillColorB(b) {
        this._fillColorRGBA[2] = b | 0;
        this._isFillDirty = true;
    }
    get fillColorB() {
        return this._fillColorRGBA[2];
    }
    set fillColorA(a) {
        this._fillColorRGBA[3] = a;
        this._isFillDirty = true;
        // this.styleManager.withFill(toRgbaString(this._fillColorRGBA));
    }
    get fillColorA() {
        return this._fillColorRGBA[3];
    }
    // "strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"
    set strokeWidth(w) {
        this._strokeWidth = w;
        this._isStrokeDirty = true;
    }
    get strokeWidth() {
        return this._strokeWidth;
    }
    set strokeColorRGBA(rgba) {
        this._strokeColorRGBA = color_style_parser_1.parseColorStyle(rgba);
        this._isStrokeDirty = true;
    }
    get strokeColorRGBA() {
        return color_style_parser_1.toRgbaString(this._strokeColorRGBA);
    }
    set strokeColorR(r) {
        this._strokeColorRGBA[0] = r | 0;
        this._isStrokeDirty = true;
    }
    get strokeColorR() {
        return this._strokeColorRGBA[0];
    }
    set strokeColorG(g) {
        this._strokeColorRGBA[1] = g | 0;
        this._isStrokeDirty = true;
    }
    get strokeColorG() {
        return this._strokeColorRGBA[1];
    }
    set strokeColorB(b) {
        this._strokeColorRGBA[2] = b | 0;
        this._isStrokeDirty = true;
    }
    get strokeColorB() {
        return this._strokeColorRGBA[2];
    }
    set strokeColorA(a) {
        this._strokeColorRGBA[3] = a;
        this._isStrokeDirty = true;
        // this.styleManager.withStroke(this._strokeWidth, toRgbaString(this._strokeColorRGBA));
    }
    get strokeColorA() {
        return this._strokeColorRGBA[3];
    }
    // "shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"
    set shadowBlur(b) {
        this._shadowBlur = Math.max(0, b);
        this._isShadowDirty = true;
    }
    get shadowBlur() {
        return this._shadowBlur;
    }
    set shadowOffsetX(x) {
        this._shadowOffset[0] = x;
        this._isShadowDirty = true;
    }
    get shadowOffsetX() {
        return this._shadowOffset[0];
    }
    set shadowOffsetY(y) {
        this._shadowOffset[1] = y;
        this._isShadowDirty = true;
    }
    get shadowOffsetY() {
        return this._shadowOffset[1];
    }
    set shadowColorRGBA(rgba) {
        this._shadowColorRGBA = color_style_parser_1.parseColorStyle(rgba);
        this._isShadowDirty = true;
    }
    get shadowColorRGBA() {
        return color_style_parser_1.toRgbaString(this._shadowColorRGBA);
    }
    set shadowColorR(r) {
        this._shadowColorRGBA[0] = r | 0;
        this._isShadowDirty = true;
    }
    get shadowColorR() {
        return this._shadowColorRGBA[0];
    }
    set shadowColorG(g) {
        this._shadowColorRGBA[1] = g | 0;
        this._isShadowDirty = true;
    }
    get shadowColorG() {
        return this._shadowColorRGBA[1];
    }
    set shadowColorB(b) {
        this._shadowColorRGBA[2] = b | 0;
        this._isShadowDirty = true;
    }
    get shadowColorB() {
        return this._shadowColorRGBA[2];
    }
    set shadowColorA(a) {
        this._shadowColorRGBA[3] = a;
        this._isShadowDirty = true;
    }
    get shadowColorA() {
        return this._shadowColorRGBA[3];
    }
}
exports.StyleTweenHelper = StyleTweenHelper;
//# sourceMappingURL=StyleTweenHelper.js.map