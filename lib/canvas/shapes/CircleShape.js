"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const BaseStyle_1 = require("../styles/BaseStyle");
const MathPIx2 = 6.2832; // 2 * Math.PI;
/**
 * Draws a filled and/or stroked circle.
 */
class CircleShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Circle_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
    }
    get type() { return interfaces_1.ShapeType.SHAPE; }
    set width(v) { throw new ReferenceError(`LineShape width cannot be set (${v}).`); }
    set height(v) { throw new ReferenceError(`LineShape height cannot be set (${v}).`); }
    set radius(r) {
        this.boundary.reset();
        this.boundary.setPoint([-r, -r]);
        this.boundary.setPoint([r, r]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
    }
    get radius() {
        return super.width / 2;
    }
    withRadius(r, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback, 5);
        }
        else {
            this.radius = r;
        }
        return this;
    }
    traceShape(ctx) {
        ctx.beginPath();
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, MathPIx2);
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    }
    customDraw() {
        this.traceShape(this.ctx);
    }
}
exports.CircleShape = CircleShape;
//# sourceMappingURL=CircleShape.js.map