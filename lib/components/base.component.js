"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * The base class for all shape components.
 */
class NgvasBaseComponent {
    constructor(Clazz) {
        this.Clazz = Clazz;
        this._delayedSetters = [];
        this.clickEvent = new core_1.EventEmitter();
        this.shapeOut = new core_1.EventEmitter();
    }
    set active(a) { this.execOrDelay(s => s.isActive = a); }
    ;
    set visible(v) { this.execOrDelay(s => s.isVisible = v); }
    ;
    set x(x) { this.execOrDelay(s => s.x = x); }
    ;
    set y(y) { this.execOrDelay(s => s.y = y); }
    ;
    set origin(xy) {
        if (xy === "center") {
            this.execOrDelay(s => s.originToCenter = true);
        }
        else {
            this.execOrDelay(s => {
                s.originX = xy[0];
                s.originY = xy[1];
            });
        }
    }
    ;
    set width(w) { this.execOrDelay(s => s.width = w); }
    ;
    set height(h) { this.execOrDelay(s => s.height = h); }
    ;
    set rotation(r) { this.execOrDelay(s => s.rotation = r); }
    ;
    /////////////////////////////////////////////
    // TWEENER INPUTS
    set scale(v) {
        if (typeof v[0] === "number") {
            const [x, y] = v;
            this.execOrDelay(s => s.scale(x, y));
        }
        else if (Array.isArray(v[0])) {
            const [[x, y], duration, tween, callback] = v;
            this.execOrDelay(s => s.scale(x, y, duration, tween, callback));
        }
    }
    set size(v) {
        if (typeof v[0] === "number") {
            const [w, h] = v;
            this.execOrDelay(s => s.resize(w, h));
        }
        else if (Array.isArray(v[0])) {
            const [[w, h], duration, tween, callback] = v;
            this.execOrDelay(s => s.resize(w, h, duration, tween, callback));
        }
    }
    set skew(v) {
        if (typeof v[0] === "number") {
            const [x, y] = v;
            this.execOrDelay(s => s.skew(x, y));
        }
        else if (Array.isArray(v[0])) {
            const [[x, y], duration, tween, callback] = v;
            this.execOrDelay(s => s.skew(x, y, duration, tween, callback));
        }
    }
    set rotate(v) {
        if (typeof v === "number") {
            const r = v;
            this.execOrDelay(s => s.rotate(r));
        }
        else if (Array.isArray(v[0])) {
            const [r, duration, tween, callback] = v;
            this.execOrDelay(s => s.rotate(r, duration, tween, callback));
        }
    }
    set translate(v) {
        if (typeof v[0] === "number") {
            const [x, y] = v;
            this.execOrDelay(s => s.translate(x, y));
        }
        else if (Array.isArray(v[0])) {
            const [[x, y], duration, tween, callback] = v;
            this.execOrDelay(s => s.translate(x, y, duration, tween, callback));
        }
    }
    set animate(f) {
        if (f === undefined) {
            this.execOrDelay(s => s.removeAnimationFunction());
        }
        else {
            this.execOrDelay(s => s.setAnimationFunction(f));
        }
    }
    set constrain(fs) {
        if (fs === undefined) {
            this.execOrDelay(s => s.withConstraint());
        }
        else {
            this.execOrDelay(s => s.withConstraint(...fs));
        }
    }
    /////////////////////////////////////////////
    // HIT AREA
    set hitArea(Clazz) {
        this.execOrDelay(s => s.withHitArea(Clazz));
    }
    /////////////////////////////////////////////
    // STYLE INPUTS
    set opacity(alpha) {
        this.execOrDelay(s => s.opacity = alpha);
    }
    set compose(c) {
        this.execOrDelay(s => s.compose(c.alpha, c.overlay));
    }
    set fill(st) {
        if (Array.isArray(st)) {
            this.execOrDelay(s => s.withFill(st[0], st[1], st[2], st[3]));
        }
        else {
            this.execOrDelay(s => s.withFill(st));
        }
    }
    set stroke(st) {
        if (Array.isArray(st)) {
            this.execOrDelay(s => {
                s.withStroke(st[0].width, st[0].style, st[0].join, st[0].cap, st[0].dashOffset);
                s.withStroke(st[0].width, st[0].style, st[1], st[2], st[3]);
            });
        }
        else {
            this.execOrDelay(s => s.withStroke(st.width, st.style, st.join, st.cap, st.dashOffset));
        }
    }
    set shadow(sh) {
        if (Array.isArray(sh)) {
            this.execOrDelay(s => s.withShadow(sh[0].blur, sh[0].color, sh[0].offsetX, sh[0].offsetY, sh[1], sh[2], sh[3]));
        }
        else {
            this.execOrDelay(s => s.withShadow(sh.blur, sh.color, sh.offsetX, sh.offsetY));
        }
    }
    set click(listener) {
        if (listener !== undefined) {
            this.execOrDelay(shape => shape.addEventListener("click", s => { this.clickEvent.emit(s); }));
        }
    }
    getShape() {
        return this._shape;
    }
    initShape(ctx) {
        if (this._shape !== undefined) {
            return this._shape;
        }
        this._shape = new this.Clazz(ctx.canvas, ctx, this.name);
        this._delayedSetters.forEach(f => f(this._shape));
        this._delayedSetters = [];
        this.shapeOut.emit(this._shape);
        return this._shape;
    }
    execOrDelay(f) {
        this._shape ? f(this._shape) : this._delayedSetters.push(f);
    }
}
__decorate([
    core_1.Input("name"),
    __metadata("design:type", String)
], NgvasBaseComponent.prototype, "name", void 0);
__decorate([
    core_1.Input("active"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgvasBaseComponent.prototype, "active", null);
__decorate([
    core_1.Input("visible"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgvasBaseComponent.prototype, "visible", null);
__decorate([
    core_1.Input("x"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasBaseComponent.prototype, "x", null);
__decorate([
    core_1.Input("y"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasBaseComponent.prototype, "y", null);
__decorate([
    core_1.Input("origin"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "origin", null);
__decorate([
    core_1.Input("width"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasBaseComponent.prototype, "width", null);
__decorate([
    core_1.Input("height"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasBaseComponent.prototype, "height", null);
__decorate([
    core_1.Input("rotation"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasBaseComponent.prototype, "rotation", null);
__decorate([
    core_1.Input("scale"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "scale", null);
__decorate([
    core_1.Input("size"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "size", null);
__decorate([
    core_1.Input("skew"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "skew", null);
__decorate([
    core_1.Input("rotate"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "rotate", null);
__decorate([
    core_1.Input("translate"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "translate", null);
__decorate([
    core_1.Input("animate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], NgvasBaseComponent.prototype, "animate", null);
__decorate([
    core_1.Input("constrain"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "constrain", null);
__decorate([
    core_1.Input("hitArea"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "hitArea", null);
__decorate([
    core_1.Input("opacity"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasBaseComponent.prototype, "opacity", null);
__decorate([
    core_1.Input("compose"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "compose", null);
__decorate([
    core_1.Input("fill"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "fill", null);
__decorate([
    core_1.Input("stroke"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "stroke", null);
__decorate([
    core_1.Input("shadow"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "shadow", null);
__decorate([
    core_1.Input("click"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasBaseComponent.prototype, "click", null);
__decorate([
    core_1.Output("click"),
    __metadata("design:type", Object)
], NgvasBaseComponent.prototype, "clickEvent", void 0);
__decorate([
    core_1.Output("shape"),
    __metadata("design:type", Object)
], NgvasBaseComponent.prototype, "shapeOut", void 0);
exports.NgvasBaseComponent = NgvasBaseComponent;
//# sourceMappingURL=base.component.js.map