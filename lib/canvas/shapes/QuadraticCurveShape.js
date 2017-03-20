"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = require("../styles/BaseStyle");
const interfaces_1 = require("./interfaces");
/**
 * Draws a stroked line.
 */
class QuadraticCurveShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "QuadraticCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._curves = [];
    }
    get type() { return interfaces_1.ShapeType.SHAPE; }
    get numCurves() {
        return this._curves.length;
    }
    addCurve(curve) {
        this._curves.push(curve);
        const [p1, cp1, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    }
    clear() {
        super.clear();
        this._curves = [];
        return this;
    }
    traceShape(ctx) {
        if (this._curves.length < 1) {
            throw new ReferenceError(`QuadraticCurveShape (${this.name}) must have at least one Point.`);
        }
        const [[[x, y], [x2, y2], [x3, y3]], ...curvesTo] = this._curves;
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(([, [_x2, _y2], [_x3, _y3]]) => ctx.quadraticCurveTo(_x2 - this.originX, _y2 - this.originY, _x3 - this.originX, _y3 - this.originY));
        }
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
exports.QuadraticCurveShape = QuadraticCurveShape;
//# sourceMappingURL=QuadraticCurveShape.js.map