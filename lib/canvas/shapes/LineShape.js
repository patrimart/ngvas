"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = require("../styles/BaseStyle");
const interfaces_1 = require("./interfaces");
/**
 * Draws a stroked line.
 */
class LineShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Line_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._linePoints = [];
    }
    get type() { return interfaces_1.ShapeType.LINE; }
    set width(v) { throw new ReferenceError(`LineShape width cannot be set (${v}).`); }
    set height(v) { throw new ReferenceError(`LineShape height cannot be set (${v}).`); }
    addLine(line) {
        this._linePoints.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        if (this.originToCenter) {
            this.originToCenter = true;
        }
        return this;
    }
    clear() {
        super.clear();
        this._linePoints = [];
        return this;
    }
    traceShape(ctx) {
        if (this._linePoints.length < 1) {
            throw new ReferenceError(`LineShape (${this.name}) must have at least one line.`);
        }
        ctx.beginPath();
        this._linePoints.forEach(([[x, y], [x2, y2]], i) => {
            if (i === 0) {
                ctx.moveTo(x - this.originX, y - this.originY);
            }
            ctx.lineTo(x2 - this.originX, y2 - this.originY);
        });
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
exports.LineShape = LineShape;
//# sourceMappingURL=LineShape.js.map