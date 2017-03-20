"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = require("../styles/BaseStyle");
const interfaces_1 = require("./interfaces");
const Boundary_1 = require("../Boundary");
/**
 * Draws a stroked line.
 */
class BezierCurveShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "BezierCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._curves = [];
        this._boundary = new Boundary_1.Boundary();
    }
    get type() { return interfaces_1.ShapeType.LINE; }
    get width() { return this._boundary.width; }
    get height() { return this._boundary.height; }
    get numCurves() {
        return this._curves.length;
    }
    addCurve(curve) {
        this._curves.push(curve);
        const [p1, cp1, cp2, p2] = curve;
        this._boundary.setPoint(p1);
        this._boundary.setPoint(p2);
        this._boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
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
            throw new ReferenceError(`BezierCurveShape (${this.name}) must have at least one Point.`);
        }
        const [[[x, y], [x2, y2], [x3, y3], [x4, y4]], ...curvesTo] = this._curves;
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.bezierCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY, x4 - this.originX, y4 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(([, [_x2, _y2], [_x3, _y3], [_x4, _y4]]) => ctx.bezierCurveTo(_x2 - this.originX, _y2 - this.originY, _x3 - this.originX, _y3 - this.originY, _x4 - this.originX, _y4 - this.originY));
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
exports.BezierCurveShape = BezierCurveShape;
//# sourceMappingURL=BezierCurveShape.js.map