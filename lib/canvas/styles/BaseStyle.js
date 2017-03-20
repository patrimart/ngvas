"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseShape_1 = require("../shapes/BaseShape");
const StyleManager_1 = require("./StyleManager");
const color_style_parser_1 = require("./color-style-parser");
/**
 * Draws a filled and/or stroked rectangle.
 */
class BaseStyle extends BaseShape_1.BaseShape {
    constructor(canvas, ctx, name) {
        super(canvas, ctx, name);
        this._fillColorRGBA = [0, 0, 0, 1];
        this._strokeColorRGBA = [0, 0, 0, 1];
        this._shadowColorRGBA = [0, 0, 0, 1];
        this.styleManager = new StyleManager_1.StyleManager(this.ctx);
    }
    set isVisible(v) {
        super.isVisible = v;
    }
    get isVisible() {
        return (this.styleManager.hasFill || this.styleManager.hasStroke) && this.ctx.globalAlpha > 0 && super.isVisible;
    }
    set opacity(alpha) {
        this.styleManager.opacity = alpha;
    }
    get opacity() {
        return this.styleManager.opacity;
    }
    compose(alpha, overlay) {
        this.styleManager.compose(alpha, overlay);
        return this;
    }
    withFill(style, duration = 0, tween, callback) {
        if (duration > 1) {
            const vals = color_style_parser_1.parseColorStyle(style);
            const props = ["fillColorR", "fillColorG", "fillColorB", "fillColorA"];
            this.tweenManager.addTween(this, tween, duration, vals, props, callback);
        }
        else {
            style = typeof style === "number" ? `#${style.toString(16)}` : style;
            this.fillColorRGBA = color_style_parser_1.parseColorStyle(style);
            this.styleManager.withFill(style);
        }
        return this;
    }
    withStroke(...args) {
        if (typeof args[2] === "number" && args[2] > 1) {
            const vals = [args[0] | 0, ...color_style_parser_1.parseColorStyle(args[1])];
            const props = ["strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"];
            this.tweenManager.addTween(this, args[3], args[2], vals, props, args[4]);
        }
        else {
            let [width, style, join, cap, dashOffset, miterLimit] = args;
            style = typeof style === "number" ? `#${style.toString(16)}` : style;
            this.strokeColorRGBA = color_style_parser_1.parseColorStyle(style);
            this.styleManager.withStroke(width, style, join, cap, dashOffset, miterLimit);
        }
        return this;
    }
    withShadow(blur, color, offsetX, offsetY, duration = 0, tween, callback) {
        if (duration > 1) {
            const vals = [blur, ...color_style_parser_1.parseColorStyle(color), offsetX, offsetY];
            const props = ["shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"];
            this.tweenManager.addTween(this, tween, duration, vals, props, callback);
        }
        else {
            color = typeof color === "number" ? `#${color.toString(16)}` : color;
            this.shadowColorRGBA = color_style_parser_1.parseColorStyle(color);
            this.styleManager.withShadow(blur, color, offsetX, offsetY);
        }
        return this;
    }
    textStyle(font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }
    draw(ctxt) {
        this.styleManager.begin();
        super.draw(ctxt);
        this.styleManager.end();
    }
    clear() {
        super.clear();
        this.styleManager.clear();
        super.isVisible = true;
        return this;
    }
    /////////////////////////////////////////////
    // TWEEN HELPERS
    set fillColorRGBA(rgba) {
        this._fillColorRGBA = rgba;
    }
    get fillColorRGBA() {
        return this._fillColorRGBA;
    }
    set fillColorR(r) {
        this._fillColorRGBA[0] = r | 0;
    }
    get fillColorR() {
        return this._fillColorRGBA[0];
    }
    set fillColorG(g) {
        this._fillColorRGBA[1] = g | 0;
    }
    get fillColorG() {
        return this._fillColorRGBA[1];
    }
    set fillColorB(b) {
        this._fillColorRGBA[2] = b | 0;
    }
    get fillColorB() {
        return this._fillColorRGBA[2];
    }
    set fillColorA(a) {
        this._fillColorRGBA[3] = a;
        this.styleManager.withFill(color_style_parser_1.toRgbaString(this._fillColorRGBA));
    }
    get fillColorA() {
        return this._fillColorRGBA[3];
    }
    set strokeColorRGBA(rgba) {
        this._strokeColorRGBA = rgba;
        console.log(this._strokeColorRGBA);
    }
    get strokeColorRGBA() {
        return this._strokeColorRGBA;
    }
    set strokeColorR(r) {
        this._strokeColorRGBA[0] = r | 0;
    }
    get strokeColorR() {
        return this._strokeColorRGBA[0];
    }
    set strokeColorG(g) {
        this._strokeColorRGBA[1] = g | 0;
    }
    get strokeColorG() {
        return this._strokeColorRGBA[1];
    }
    set strokeColorB(b) {
        this._strokeColorRGBA[2] = b | 0;
    }
    get strokeColorB() {
        return this._strokeColorRGBA[2];
    }
    set strokeColorA(a) {
        this._strokeColorRGBA[3] = a;
        this.styleManager.withFill(color_style_parser_1.toRgbaString(this._strokeColorRGBA));
    }
    get strokeColorA() {
        return this._strokeColorRGBA[3];
    }
    set shadowColorRGBA(rgba) {
        this._shadowColorRGBA = rgba;
        console.log(this._shadowColorRGBA);
    }
    get shadowColorRGBA() {
        return this._shadowColorRGBA;
    }
    set shadowColorR(r) {
        this._shadowColorRGBA[0] = r | 0;
    }
    get shadowColorR() {
        return this._shadowColorRGBA[0];
    }
    set shadowColorG(g) {
        this._shadowColorRGBA[1] = g | 0;
    }
    get shadowColorG() {
        return this._shadowColorRGBA[1];
    }
    set shadowColorB(b) {
        this._shadowColorRGBA[2] = b | 0;
    }
    get shadowColorB() {
        return this._shadowColorRGBA[2];
    }
    set shadowColorA(a) {
        this._shadowColorRGBA[3] = a;
        this.styleManager.withFill(color_style_parser_1.toRgbaString(this._shadowColorRGBA));
    }
    get shadowColorA() {
        return this._shadowColorRGBA[3];
    }
}
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=BaseStyle.js.map