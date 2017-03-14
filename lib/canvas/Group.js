"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./shapes/interfaces");
const BaseStyle_1 = require("./styles/BaseStyle");
class Group extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name) {
        super(canvas, ctx, name);
        // Render children from high to 0 index.
        this._children = [];
        this.__isVisible = true;
        this.__isActive = true;
    }
    get type() {
        return interfaces_1.ShapeType.GROUP;
    }
    get isActive() { return this.__isActive; }
    set isActive(v) { this.__isActive = v; }
    get isVisible() { return this.__isVisible; }
    set isVisible(v) { this.__isVisible = v; }
    withText() {
        throw new Error("This method is not supported in StyleManager.");
    }
    numChildren() {
        return this._children.length;
    }
    addChild(shape) {
        this._children.push(shape);
        return this;
    }
    removeChild(shape) {
        this._children = this._children.filter(s => s === shape);
        return this;
    }
    removeChildAt(index) {
        const child = this._children[index];
        this._children = this._children.filter(s => s !== child);
        return child;
    }
    removeAllChildren() {
        this._children = [];
    }
    traceShape(ctx) {
        this._children.filter(c => c.traceShape !== undefined).forEach(c => c.traceShape(ctx));
    }
    customDraw(ctxt) {
        if (this.isActive || this.isVisible) {
            this._children.forEach(c => {
                // c.originX += this.originX + c.x;
                // c.originY += this.originY + c.y;
                c.draw(ctxt);
                // c.originX -= this.originX + c.x;
                // c.originY -= this.originY + c.y;
            });
        }
    }
    isHit(x, y) {
        if (!this.isVisible) {
            return false;
        }
        // Runs hitArea on every child.
        let isHit = false;
        for (const c of this._children) {
            if (c.isVisible && c.isHit(x, y)) {
                isHit = true;
            }
        }
        return isHit;
    }
}
exports.Group = Group;
//# sourceMappingURL=Group.js.map