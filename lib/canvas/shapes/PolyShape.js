"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const BaseStyle_1 = require("../styles/BaseStyle");
/**
 * Draws a filled and/or stroked polygon.
 */
class PolyShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "PolyShape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._sidesCollection = [];
    }
    get type() { return interfaces_1.ShapeType.SHAPE; }
    get width() { return this.boundary.width; }
    get height() { return this.boundary.height; }
    addLine(line) {
        this._sidesCollection.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    }
    addBezier(curve) {
        this._sidesCollection.push(curve);
        const [p1, cp1, cp2, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    }
    addQuadratic(curve) {
        this._sidesCollection.push(curve);
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
        this.boundary.reset();
        this._sidesCollection = [];
        return this;
    }
    traceShape(ctx) {
        if (this._sidesCollection.length < 2) {
            throw new ReferenceError(`PolyShape (${this.name}) must have at least two sides.`);
        }
        const [[x, y],] = this._sidesCollection[0];
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        this._sidesCollection.forEach(s => {
            // Line
            if (s.length === 2) {
                const [, [x2, y2]] = s;
                ctx.lineTo(x2 - this.originX, y2 - this.originY);
                // Quadratic
            }
            else if (s.length === 3) {
                const [, [x2, y2], [x3, y3]] = s.slice(0, 3);
                ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);
                // Bezier
            }
            else if (s.length === 4) {
                const [, [x2, y2], [x3, y3], [x4, y4]] = s.slice(0, 4);
                ctx.bezierCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY, x4 - this.originX, y4 - this.originY);
            }
        });
        ctx.closePath();
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
exports.PolyShape = PolyShape;
//# sourceMappingURL=PolyShape.js.map