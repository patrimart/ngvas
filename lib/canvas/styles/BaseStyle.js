"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseShape_1 = require("../shapes/BaseShape");
const StyleManager_1 = require("./StyleManager");
const color_style_parser_1 = require("./color-style-parser");
const StyleTweenHelper_1 = require("./StyleTweenHelper");
/**
 * Draws a filled and/or stroked rectangle.
 */
class BaseStyle extends BaseShape_1.BaseShape {
    constructor(canvas, ctx, name) {
        super(canvas, ctx, name);
        this._styleTweenHelper = new StyleTweenHelper_1.StyleTweenHelper();
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
        if (duration > 1 && style !== undefined) {
            const vals = color_style_parser_1.parseColorStyle(style);
            const props = ["fillColorR", "fillColorG", "fillColorB", "fillColorA"];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        }
        else {
            style = typeof style === "number" ? `#${style.toString(16)}` : style;
            if (typeof style === "string") {
                this._styleTweenHelper.fillColorRGBA = style;
            }
            this.styleManager.withFill(style);
        }
        return this;
    }
    withStroke(...args) {
        if (typeof args[2] === "number" && args[2] > 1) {
            const vals = [args[0] | 0, ...color_style_parser_1.parseColorStyle(args[1])];
            const props = ["strokeWidth", "strokeColorR", "strokeColorG", "strokeColorB", "strokeColorA"];
            this.tweenManager.addTween(this._styleTweenHelper, args[3], args[2], vals, props, args[4]);
        }
        else {
            let [width, style, join, cap, dashOffset, miterLimit] = args;
            if (width !== undefined) {
                this._styleTweenHelper.strokeWidth = width;
            }
            if (style !== undefined) {
                this._styleTweenHelper.strokeColorRGBA = style;
            }
            this.styleManager.withStroke(undefined, undefined, join, cap, dashOffset, miterLimit);
        }
        return this;
    }
    withShadow(blur, color, offsetX, offsetY, duration = 0, tween, callback) {
        if (duration > 1) {
            const vals = [blur, ...color_style_parser_1.parseColorStyle(color), offsetX, offsetY];
            const props = ["shadowBlur", "shadowColorR", "shadowColorG", "shadowColorB", "shadowColorA", "shadowOffsetX", "shadowOffsetY"];
            this.tweenManager.addTween(this._styleTweenHelper, tween, duration, vals, props, callback);
        }
        else {
            color = typeof color === "number" ? `#${color.toString(16)}` : color;
            this._styleTweenHelper.shadowBlur = blur;
            this._styleTweenHelper.shadowColorRGBA = color;
            this._styleTweenHelper.shadowOffsetX = offsetX;
            this._styleTweenHelper.shadowOffsetY = offsetY;
        }
        return this;
    }
    textStyle(font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }
    draw(ctxt) {
        this.styleManager.begin();
        this._styleTweenHelper.draw(this.styleManager);
        super.draw(ctxt);
        this.styleManager.end();
    }
    clear() {
        super.clear();
        this.styleManager.clear();
        super.isVisible = true;
        return this;
    }
}
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=BaseStyle.js.map