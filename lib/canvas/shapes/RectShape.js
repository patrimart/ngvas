"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = require("../styles/BaseStyle");
const interfaces_1 = require("./interfaces");
/**
 * Draws a filled and/or stroked rectangle.
 */
class RectShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Rect_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
    }
    get type() { return interfaces_1.ShapeType.SHAPE; }
    traceShape(ctx) {
        if (this.styleManager.hasFill) {
            ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
        if (this.styleManager.hasStroke) {
            ctx.strokeRect(0 - this.originX, 0 - this.originY, this.width, this.height);
        }
    }
    customDraw() {
        this.traceShape(this.ctx);
    }
}
exports.RectShape = RectShape;
//# sourceMappingURL=RectShape.js.map