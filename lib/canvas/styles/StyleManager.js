"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StyleManager {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctxValues = {};
    }
    get hasFill() {
        return !!this.ctxValues.fillStyle;
    }
    get hasStroke() {
        return !!this.ctxValues.lineWidth;
    }
    get lineWidth() {
        return this.ctxValues.lineWidth;
    }
    set opacity(alpha) {
        this.ctxValues.globalAlpha = alpha;
    }
    get opacity() {
        return this.ctxValues.globalAlpha;
    }
    compose(alpha, overlay) {
        this.ctxValues.globalAlpha = undefinedOr(alpha, this.ctxValues.globalAlpha);
        this.ctxValues.globalCompositeOperation = undefinedOr(overlay, this.ctxValues.globalCompositeOperation);
        return this;
    }
    withFill(style) {
        this.ctxValues.fillStyle = undefinedOr(style, this.ctxValues.fillStyle);
        return this;
    }
    withStroke(width, style, join, cap, dashOffset, miterLimit) {
        this.ctxValues.lineCap = undefinedOr(cap, this.ctxValues.lineCap);
        this.ctxValues.lineDashOffset = undefinedOr(dashOffset, this.ctxValues.lineDashOffset);
        this.ctxValues.lineJoin = undefinedOr(join, this.ctxValues.lineJoin);
        this.ctxValues.lineWidth = undefinedOr(width, this.ctxValues.lineWidth);
        this.ctxValues.strokeStyle = undefinedOr(style, this.ctxValues.strokeStyle);
        this.ctxValues.miterLimit = undefinedOr(miterLimit, this.ctxValues.miterLimit);
        return this;
    }
    withShadow(blur, color, offsetX, offsetY) {
        this.ctxValues.shadowBlur = undefinedOr(blur, this.ctxValues.shadowBlur);
        this.ctxValues.shadowColor = undefinedOr(color, this.ctxValues.shadowColor);
        this.ctxValues.shadowOffsetX = undefinedOr(offsetX, this.ctxValues.shadowOffsetX);
        this.ctxValues.shadowOffsetY = undefinedOr(offsetY, this.ctxValues.shadowOffsetY);
        return this;
    }
    withText() {
        throw new Error("This method is not supported in StyleManager.");
    }
    textStyle(font, align, baseline) {
        this.ctxValues.font = undefinedOr(font, this.ctxValues.font);
        this.ctxValues.textAlign = undefinedOr(align, this.ctxValues.textAlign);
        this.ctxValues.textBaseline = undefinedOr(baseline, this.ctxValues.textBaseline);
        return this;
    }
    begin() {
        this.ctx.save();
        for (const p in this.ctxValues) {
            if (this.ctxValues.hasOwnProperty(p)) {
                this.ctx[p] = this.ctxValues[p];
            }
        }
    }
    end() {
        this.ctx.restore();
    }
    clear() {
        this.ctxValues = {};
    }
}
exports.StyleManager = StyleManager;
function undefinedOr(arg, ctxProp) {
    return arg !== undefined ? arg : ctxProp;
}
//# sourceMappingURL=StyleManager.js.map