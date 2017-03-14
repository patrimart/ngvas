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
        // @Input("click")
        // public set click (listener: any) {
        //     this.execOrDelay((s: S) => s.addEventListener("click", () =>));
        // }
        this.clickEvent = new core_1.EventEmitter();
        this.shapeOut = new core_1.EventEmitter();
    }
    set active(a) { this.execOrDelay((s) => s.isActive = a); }
    ;
    set visible(v) { this.execOrDelay((s) => s.isVisible = v); }
    ;
    set xy(xy) { this.execOrDelay((s) => { s.x = xy[0]; s.y = xy[1]; }); }
    ;
    set origin(xy) {
        if (xy === "center") {
            this.execOrDelay((s) => s.originToCenter());
        }
        else {
            this.execOrDelay((s) => { s.originX = xy[0]; s.originY = xy[1]; });
        }
    }
    ;
    set width(w) { this.execOrDelay((s) => s.width = w); }
    ;
    set height(h) { this.execOrDelay((s) => s.height = h); }
    ;
    set rotation(r) { this.execOrDelay((s) => s.rotation = r); }
    ;
    set scale(xy) {
        if (typeof xy === "number") {
            this.execOrDelay((s) => { s.scaleX = xy; s.scaleY = xy; });
        }
        else {
            this.execOrDelay((s) => { s.scaleX = xy[0]; s.scaleY = xy[1]; });
        }
    }
    ;
    set skew(xy) { this.execOrDelay((s) => { s.skewX = xy[0]; s.skewY = xy[1]; }); }
    ;
    set scaler(v) {
        this.execOrDelay((s) => s.scale(v[0][0], v[0][1], v[1], v[2]));
    }
    set sizer(v) {
        this.execOrDelay((s) => s.resize(v[0][0], v[0][1], v[1], v[2]));
    }
    set skewer(v) {
        this.execOrDelay((s) => s.skew(v[0][0], v[0][1], v[1], v[2]));
    }
    set rotater(v) {
        this.execOrDelay((s) => s.rotate(v[0], v[1], v[2]));
    }
    set mover(v) {
        this.execOrDelay((s) => s.translate(v[0][0], v[0][1], v[1], v[2]));
    }
    set animator(f) {
        if (f === undefined) {
            this.execOrDelay((s) => s.removeAnimationFunction());
        }
        else {
            this.execOrDelay((s) => s.setAnimationFunction(f));
        }
    }
    set constrainer(fs) {
        if (fs === undefined) {
            this.execOrDelay((s) => s.withConstraint());
        }
        else {
            this.execOrDelay((s) => s.withConstraint(...fs));
        }
    }
    set hitArea(Clazz) {
        this.execOrDelay((s) => s.withHitArea(Clazz));
    }
    set opacity(alpha) {
        this.execOrDelay((s) => s.opacity = alpha);
    }
    set compose(c) {
        this.execOrDelay((s) => s.compose(c.alpha, c.overlay));
    }
    set fill(st) {
        this.execOrDelay((s) => s.withFill(st));
    }
    set stroke(st) {
        this.execOrDelay((s) => s.withStroke(st.width, st.style, st.join, st.cap, st.dashOffset));
    }
    set shadow(sh) {
        this.execOrDelay((s) => s.withShadow(sh.blur, sh.color, sh.offsetX, sh.offsetY));
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
    core_1.Input("xy"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "xy", null);
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
    core_1.Input("skew"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "skew", null);
__decorate([
    core_1.Input("scaler"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "scaler", null);
__decorate([
    core_1.Input("sizer"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "sizer", null);
__decorate([
    core_1.Input("skewer"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "skewer", null);
__decorate([
    core_1.Input("rotater"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "rotater", null);
__decorate([
    core_1.Input("mover"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "mover", null);
__decorate([
    core_1.Input("animator"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], NgvasBaseComponent.prototype, "animator", null);
__decorate([
    core_1.Input("constrainer"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBaseComponent.prototype, "constrainer", null);
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
    core_1.Output("click"),
    __metadata("design:type", Object)
], NgvasBaseComponent.prototype, "clickEvent", void 0);
__decorate([
    core_1.Output("shape"),
    __metadata("design:type", Object)
], NgvasBaseComponent.prototype, "shapeOut", void 0);
exports.NgvasBaseComponent = NgvasBaseComponent;
//# sourceMappingURL=base.component.js.map