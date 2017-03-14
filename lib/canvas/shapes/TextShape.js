"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = require("../styles/BaseStyle");
const interfaces_1 = require("./interfaces");
/**
 * Draws a filled and/or stroked line of text.
 */
class TextShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Text_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._text = "";
    }
    get type() { return interfaces_1.ShapeType.TEXT; }
    withText(text, maxWidth) {
        this._maxWidth = maxWidth;
        this.text = text;
        return this;
    }
    set text(text) {
        this._text = text;
        this.styleManager.begin();
        this.width = this._maxWidth || this.ctx.measureText(this._text).width;
        this.styleManager.end();
    }
    get text() {
        return this._text;
    }
    textStyle(font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }
    traceShape(ctx) {
        ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
    }
    customDraw() {
        if (this.styleManager.hasFill) {
            this.ctx.fillText(this.text, 0 - this.originX, 0 - this.originY, this._maxWidth);
        }
        if (this.styleManager.hasStroke) {
            this.ctx.strokeText(this.text, 0 - this.originX, 0 - this.originY, this._maxWidth);
        }
    }
}
exports.TextShape = TextShape;
//# sourceMappingURL=TextShape.js.map