"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = require("../styles/BaseStyle");
const interfaces_1 = require("./interfaces");
/**
 * Draws a filled and/or stroked line of text.
 */
class ImageShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Image_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
    }
    get type() { return interfaces_1.ShapeType.IMAGE; }
    withImage(img, callback) {
        this._image = new Image();
        this._image.src = img;
        if (callback !== undefined) {
            this._image.addEventListener("load", () => callback(this));
        }
        return this;
    }
    getImage() {
        return this._image;
    }
    traceShape(ctx) {
        ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
    }
    customDraw() {
        this.ctx.drawImage(this._image, 0 - this.originX, 0 - this.originY, this.width, this.height);
    }
}
exports.ImageShape = ImageShape;
//# sourceMappingURL=ImageShape.js.map