"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const BaseStyle_1 = require("../styles/BaseStyle");
const DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * Draws a filled and/or stroked arc.
 */
class ArcShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Arc_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._angleDegree = 180;
        this._connectToCenter = false;
    }
    get type() { return interfaces_1.ShapeType.LINE; }
    set radius(r) {
        this.boundary.reset();
        this.boundary.setPoint([-r, -r]);
        this.boundary.setPoint([r, r]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
    }
    get radius() {
        return this.width / 2;
    }
    set angle(deg) {
        this._angleDegree = Math.max(0, Math.min(360, deg));
    }
    get angle() {
        return this._angleDegree;
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
    withAngle(deg, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["angle"], callback, 10);
        }
        else {
            this.angle = deg;
        }
        return this;
    }
    connectToCenter(c) {
        this._connectToCenter = c;
        return this;
    }
    traceShape(ctx) {
        ctx.beginPath();
        if (this._connectToCenter) {
            ctx.moveTo(0 - this.originX, 0 - this.originY);
        }
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, DEG_TO_ANGLE * this._angleDegree);
        if (this._connectToCenter) {
            ctx.lineTo(0 - this.originX, 0 - this.originY);
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    }
    clear() {
        super.clear();
        this._angleDegree = 180;
        this._connectToCenter = false;
        return this;
    }
    customDraw() {
        this.traceShape(this.ctx);
    }
}
exports.ArcShape = ArcShape;
//# sourceMappingURL=ArcShape.js.map