"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
/**
 * The base class for all shape components.
 */
class NgvasBaseComponent {
    /**
     * Base constructor for the base component.
     */
    constructor(Clazz) {
        this.Clazz = Clazz;
        this._delayedSetters = [];
        this.shapeOut = new core_1.EventEmitter();
        /////////////////////////////////////////////
        // MOUSE EVENTS
        this.clickEvent = new core_1.EventEmitter();
        this.dblclickEvent = new core_1.EventEmitter();
        this.wheelEvent = new core_1.EventEmitter();
        this.mouseenterEvent = new core_1.EventEmitter();
        this.mouseleaveEvent = new core_1.EventEmitter();
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
                s.originToCenter = false;
                s.originX = xy[0] || 0;
                s.originY = xy[1] || 0;
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
    set scaleX(x) { this.execOrDelay(s => s.scaleX = x); }
    ;
    set scaleY(y) { this.execOrDelay(s => s.scaleY = y); }
    ;
    set skewX(x) { this.execOrDelay(s => s.skewX = x); }
    ;
    set skewY(y) { this.execOrDelay(s => s.skewY = y); }
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
        else if (typeof v[0] === "number") {
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
                s.withStroke(undefined, undefined, st[0].join, st[0].cap, st[0].dashOffset);
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
    getShape() {
        return this._shape;
    }
    initShape(origCanvas, ctx) {
        if (this._shape !== undefined) {
            return this._shape;
        }
        this._shape = new this.Clazz(origCanvas, ctx, this.name);
        if (this.clickEvent.observers.length > 0) {
            this._shape.addEventListener("click", e => { this.clickEvent.emit(e); });
        }
        if (this.dblclickEvent.observers.length > 0) {
            this._shape.addEventListener("dblclick", e => { this.dblclickEvent.emit(e); });
        }
        if (this.wheelEvent.observers.length > 0) {
            this._shape.addEventListener("wheel", e => { this.wheelEvent.emit(e); });
        }
        if (this.mouseenterEvent.observers.length > 0) {
            this._shape.addEventListener("mouseenter", e => { this.mouseenterEvent.emit(e); });
        }
        if (this.mouseleaveEvent.observers.length > 0) {
            this._shape.addEventListener("mouseleave", e => { this.mouseleaveEvent.emit(e); });
        }
        // TODO Wrap this._shape in a Proxy to emit Outputs.
        // this._shape = new Proxy(this._shape, {
        //     set: function (oTarget: any, sKey: any, vValue: any) {
        //         // console.log("onChange in proxy", sKey, vValue);
        //         if (sKey in oTarget === false) { return false; }
        //         oTarget[sKey] = vValue;
        //         return true;
        //     }
        // });
        this._delayedSetters.forEach(f => f(this._shape));
        this._delayedSetters = [];
        this.shapeOut.emit(this._shape);
        return this._shape;
    }
    execOrDelay(f) {
        this._shape ? f(this._shape) : this._delayedSetters.push(f);
    }
}
NgvasBaseComponent.propDecorators = {
    'name': [{ type: core_1.Input, args: ["name",] },],
    'active': [{ type: core_1.Input, args: ["active",] },],
    'visible': [{ type: core_1.Input, args: ["visible",] },],
    'x': [{ type: core_1.Input, args: ["x",] },],
    'y': [{ type: core_1.Input, args: ["y",] },],
    'origin': [{ type: core_1.Input, args: ["origin",] },],
    'width': [{ type: core_1.Input, args: ["width",] },],
    'height': [{ type: core_1.Input, args: ["height",] },],
    'rotation': [{ type: core_1.Input, args: ["rotation",] },],
    'scaleX': [{ type: core_1.Input, args: ["scaleX",] },],
    'scaleY': [{ type: core_1.Input, args: ["scaleY",] },],
    'skewX': [{ type: core_1.Input, args: ["skewX",] },],
    'skewY': [{ type: core_1.Input, args: ["skewY",] },],
    'scale': [{ type: core_1.Input, args: ["scale",] },],
    'size': [{ type: core_1.Input, args: ["size",] },],
    'skew': [{ type: core_1.Input, args: ["skew",] },],
    'rotate': [{ type: core_1.Input, args: ["rotate",] },],
    'translate': [{ type: core_1.Input, args: ["translate",] },],
    'animate': [{ type: core_1.Input, args: ["animate",] },],
    'constrain': [{ type: core_1.Input, args: ["constrain",] },],
    'hitArea': [{ type: core_1.Input, args: ["hitArea",] },],
    'opacity': [{ type: core_1.Input, args: ["opacity",] },],
    'compose': [{ type: core_1.Input, args: ["compose",] },],
    'fill': [{ type: core_1.Input, args: ["fill",] },],
    'stroke': [{ type: core_1.Input, args: ["stroke",] },],
    'shadow': [{ type: core_1.Input, args: ["shadow",] },],
    'shapeOut': [{ type: core_1.Output, args: ["shape",] },],
    'clickEvent': [{ type: core_1.Output, args: ["click",] },],
    'dblclickEvent': [{ type: core_1.Output, args: ["dblclick",] },],
    'wheelEvent': [{ type: core_1.Output, args: ["wheel",] },],
    'mouseenterEvent': [{ type: core_1.Output, args: ["mouseenter",] },],
    'mouseleaveEvent': [{ type: core_1.Output, args: ["mouseleave",] },],
};
exports.NgvasBaseComponent = NgvasBaseComponent;
//# sourceMappingURL=base.component.js.map