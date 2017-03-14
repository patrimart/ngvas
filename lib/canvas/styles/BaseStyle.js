"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseShape_1 = require("../shapes/BaseShape");
const StyleManager_1 = require("./StyleManager");
/**
 * Draws a filled and/or stroked rectangle.
 */
class BaseStyle extends BaseShape_1.BaseShape {
    constructor(canvas, ctx, name) {
        super(canvas, ctx, name);
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
    withFill(style) {
        this.styleManager.withFill(style);
        return this;
    }
    withStroke(width, style, join, cap, dashOffset, miterLimit) {
        this.styleManager.withStroke(width, style, join, cap, dashOffset, miterLimit);
        return this;
    }
    withShadow(blur, color, offsetX, offsetY) {
        this.styleManager.withShadow(blur, color, offsetX, offsetY);
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
}
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=BaseStyle.js.map