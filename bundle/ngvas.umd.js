(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/platform-browser"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/platform-browser", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngvas"] = factory(require("@angular/core"), require("@angular/platform-browser"), require("@angular/common"));
	else
		root["ngvas"] = factory(root["@angular/core"], root["@angular/platform-browser"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_33__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseShape_1 = __webpack_require__(7);
const StyleManager_1 = __webpack_require__(21);
/**
 * Draws a filled and/or stroked rectangle.
 */
class BaseStyle extends BaseShape_1.BaseShape {
    constructor(canvas, ctx, name) {
        super(canvas, ctx, name);
        this.styleManager = new StyleManager_1.StyleManager(this.ctx);
    }
    set isVisible(v) {
        super.isVisible = v;
    }
    get isVisible() {
        return (this.styleManager.hasFill || this.styleManager.hasStroke) && this.ctx.globalAlpha > 0 && super.isVisible;
    }
    set opacity(alpha) {
        this.styleManager.opacity = alpha;
    }
    get opacity() {
        return this.styleManager.opacity;
    }
    compose(alpha, overlay) {
        this.styleManager.compose(alpha, overlay);
        return this;
    }
    withFill(style) {
        this.styleManager.withFill(style);
        return this;
    }
    withStroke(width, style, join, cap, dashOffset, miterLimit) {
        this.styleManager.withStroke(width, style, join, cap, dashOffset, miterLimit);
        return this;
    }
    withShadow(blur, color, offsetX, offsetY) {
        this.styleManager.withShadow(blur, color, offsetX, offsetY);
        return this;
    }
    textStyle(font, align, baseline) {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }
    draw(ctxt) {
        this.styleManager.begin();
        super.draw(ctxt);
        this.styleManager.end();
    }
    clear() {
        super.clear();
        this.styleManager.clear();
        super.isVisible = true;
        return this;
    }
}
exports.BaseStyle = BaseStyle;
//# sourceMappingURL=BaseStyle.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["EMPTY"] = 0] = "EMPTY";
    ShapeType[ShapeType["GROUP"] = 1] = "GROUP";
    ShapeType[ShapeType["IMAGE"] = 2] = "IMAGE";
    ShapeType[ShapeType["LINE"] = 3] = "LINE";
    ShapeType[ShapeType["SHAPE"] = 4] = "SHAPE";
    ShapeType[ShapeType["TEXT"] = 5] = "TEXT";
})(ShapeType = exports.ShapeType || (exports.ShapeType = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Group_1 = __webpack_require__(20);
const canvasCtxt = Object.freeze({
    scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, moveX: 0, moveY: 0, rotate: 0,
});
function createOffscreenCanvas(canvas) {
    const c = document.createElement("canvas");
    c.width = canvas.width;
    c.height = canvas.height;
    return c;
}
class CanvasGroup extends Group_1.Group {
    constructor(canvas, offscreenCanvas = createOffscreenCanvas(canvas), isActive = false) {
        super(canvas, offscreenCanvas.getContext("2d"), canvas.id || "CanvasGroup");
        this._reqAniFrameId = 0;
        super.isActive = isActive;
        this.width = canvas.width;
        this.height = canvas.height;
        // Async so other shapes can be added before first draw.
        this._reqAniFrameId = window.requestAnimationFrame(() => this.draw(canvasCtxt));
    }
    redraw() {
        this.draw(canvasCtxt);
    }
    get context() {
        return this.ctx;
    }
    get isActive() {
        return super.isActive;
    }
    set isActive(v) {
        if (super.isActive === false && v === true) {
            this._reqAniFrameId = window.requestAnimationFrame(() => this.draw(canvasCtxt));
        }
        else {
            window.cancelAnimationFrame(this._reqAniFrameId);
            this._reqAniFrameId = 0;
        }
        super.isActive = v;
    }
    draw(ctxt) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.draw(ctxt);
        this.canvas.getContext("2d").putImageData(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), 0, 0);
        if (this.isActive) {
            this._reqAniFrameId = window.requestAnimationFrame(() => this.draw(canvasCtxt));
        }
    }
    isHit() {
        return true;
    }
}
exports.CanvasGroup = CanvasGroup;
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function () {
    let lastTime = 0;
    const vendors = ["ms", "moz", "webkit", "o"];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"]
            || window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            const currTime = new Date().getTime();
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}());
//# sourceMappingURL=CanvasGroup.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * Pixel-accurate Hit Area class.
 */
class PixelHitArea {
    /**
     * Creates an instance of class.
     */
    constructor(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
    }
    /**
     * Calculates if the x, y point is within the hit area.
     */
    isHit(x, y, globalCtx, target) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.setTransform(globalCtx.scaleX, globalCtx.skewX, globalCtx.skewY, globalCtx.scaleY, globalCtx.moveX, globalCtx.moveY);
        this.ctx.rotate(globalCtx.rotate * DEG_TO_ANGLE);
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "black";
        target.traceShape(this.ctx);
        this.ctx.rotate(-(globalCtx.rotate * DEG_TO_ANGLE));
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.restore();
        return this.ctx.getImageData(x, y, 1, 1).data[3] > 0;
    }
    /**
     * Cleans up the instance.
     */
    destroy() {
        this.canvas = undefined;
        this.ctx = undefined;
    }
}
exports.PixelHitArea = PixelHitArea;
//# sourceMappingURL=PixelHitArea.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = __webpack_require__(2);
const BaseStyle_1 = __webpack_require__(1);
const DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * Draws a filled and/or stroked arc.
 */
class ArcShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Arc_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._angleDegree = 180;
        this._connectToCenter = false;
    }
    get type() { return interfaces_1.ShapeType.LINE; }
    originToCenter() {
        return this.origin(0, 0);
    }
    set radius(r) {
        this.boundary.reset();
        this.boundary.setPoint([-r, -r]);
        this.boundary.setPoint([r, r]);
    }
    get radius() {
        return this.width / 2;
    }
    set angle(deg) {
        this._angleDegree = Math.max(0, Math.min(360, deg));
    }
    get angle() {
        return this._angleDegree;
    }
    withRadius(r, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback);
        }
        else {
            this.radius = r;
        }
        return this;
    }
    withAngle(deg, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["angle"], callback);
        }
        else {
            this.angle = deg;
        }
        return this;
    }
    connectToCenter() {
        this._connectToCenter = true;
        return this;
    }
    traceShape(ctx) {
        ctx.beginPath();
        if (this._connectToCenter) {
            ctx.moveTo(0 - this.originX, 0 - this.originY);
        }
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, DEG_TO_ANGLE * this._angleDegree);
        if (this._connectToCenter) {
            ctx.lineTo(0 - this.originX, 0 - this.originY);
        }
        if (this.styleManager.hasFill) {
            ctx.fill();
        }
        if (this.styleManager.hasStroke) {
            ctx.stroke();
        }
    }
    clear() {
        super.clear();
        this._angleDegree = 180;
        this._connectToCenter = false;
        return this;
    }
    customDraw() {
        this.traceShape(this.ctx);
    }
}
exports.ArcShape = ArcShape;
//# sourceMappingURL=ArcShape.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PixelHitArea_1 = __webpack_require__(5);
const TweenManager_1 = __webpack_require__(22);
const Boundary_1 = __webpack_require__(17);
const DEG_TO_ANGLE = 0.017453; // Math.PI / 180
/**
 * BaseShape abstract class.
 *
 * protected canvas: HTMLCanvasElement
 * protected ctx: CanvasRenderingContext2D
 * protected tweenManager: TweenManager
 * protected boundary: Boundary
 * protected customDraw (ctxt?: ContextTransformer): void
 */
class BaseShape {
    constructor(canvas, ctx, _name = "Shape_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        this.canvas = canvas;
        this.ctx = ctx;
        this._name = _name;
        this._constraints = [];
        this._currentCtxt = {
            scaleX: 0, scaleY: 0,
            skewX: 0, skewY: 0,
            moveX: 0, moveY: 0,
            rotate: 0,
        };
        this._x = 0;
        this._y = 0;
        this._originX = 0;
        this._originY = 0;
        this._rotation = 0;
        this._scaleX = 1.0;
        this._scaleY = 1.0;
        this._skewX = 0;
        this._skewY = 0;
        this._isActive = true;
        this._isVisible = true;
        this.tweenManager = new TweenManager_1.TweenManager();
        this.boundary = new Boundary_1.Boundary();
    }
    get name() { return this._name; }
    set x(v) { this._x = v; }
    get x() { return this._x; }
    set y(v) { this._y = v; }
    get y() { return this._y; }
    set width(v) {
        this.boundary.setPoint([0, 0]);
        this.boundary.setPoint([v, 0]);
    }
    get width() { return this.boundary.width; }
    set height(v) {
        this.boundary.setPoint([0, 0]);
        this.boundary.setPoint([0, v]);
    }
    get height() { return this.boundary.height; }
    set originX(v) { this._originX = v; }
    get originX() { return this._originX; }
    set originY(v) { this._originY = v; }
    get originY() { return this._originY; }
    set rotation(v) { this._rotation = v; }
    get rotation() { return this._rotation; }
    set scaleX(v) { this._scaleX = v; }
    get scaleX() { return this._scaleX; }
    set scaleY(v) { this._scaleY = v; }
    get scaleY() { return this._scaleY; }
    set skewX(v) { this._skewX = v; }
    get skewX() { return this._skewX; }
    set skewY(v) { this._skewY = v; }
    get skewY() { return this._skewY; }
    set isActive(v) { this._isActive = v; }
    get isActive() { return this._isActive; }
    set isVisible(v) { this._isVisible = v; }
    get isVisible() { return this._isVisible; }
    getBoundary() {
        return this.boundary.clone();
    }
    get hitArea() { return this._hitArea; }
    get contextTransform() { return Object.assign({}, this._currentCtxt); }
    origin(x, y, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["originX", "originY"], callback);
        }
        else {
            this.originX = x;
            this.originY = y;
        }
        return this;
    }
    originToCenter() {
        return this.origin(this.width / 2, this.height / 2);
    }
    resize(w, h = w, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [w, h], ["width", "height"], callback);
        }
        else {
            this.width = w;
            this.height = h;
        }
        return this;
    }
    rotate(deg, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [deg], ["rotation"], callback);
        }
        else {
            this.rotation += deg;
        }
        return this;
    }
    scale(x, y = x, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["scaleX", "scaleY"], callback);
        }
        else {
            this.scaleX += x;
            this.scaleY += y;
        }
        return this;
    }
    skew(x, y = x, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["skewX", "skewY"], callback);
        }
        else {
            this.skewX += x;
            this.skewY += y;
        }
        return this;
    }
    translate(x, y, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["x", "y"], callback);
        }
        else {
            this.x += x;
            this.y += y;
        }
        return this;
    }
    draw(ctxt) {
        if (this.isActive) {
            if (this._aniFunc !== undefined && !this._aniFunc(this)) {
                this._aniFunc = undefined;
            }
            this.tweenManager.tween();
            this._constraints.forEach(c => c(this));
        }
        if (this.isVisible) {
            this._currentCtxt.scaleX = ctxt.scaleX * this.scaleX;
            this._currentCtxt.scaleY = ctxt.scaleY * this.scaleY;
            this._currentCtxt.skewX = ctxt.skewX + this.skewX;
            this._currentCtxt.skewY = ctxt.skewY + this.skewY;
            this._currentCtxt.moveX = ctxt.moveX + this.x;
            this._currentCtxt.moveY = ctxt.moveY + this.y;
            this._currentCtxt.rotate = ctxt.rotate + this.rotation;
            this.ctx.setTransform(this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY, this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY);
            this.ctx.rotate(this._currentCtxt.rotate * DEG_TO_ANGLE);
            if (this._clipShape !== undefined) {
                const c = this._clipShape;
                // this.ctx.save();
                this.ctx.setTransform(this._currentCtxt.scaleX * c.scaleX, this._currentCtxt.skewX + c.skewX, this._currentCtxt.skewY + c.skewY, this._currentCtxt.scaleY * c.scaleY, this._currentCtxt.moveX + c.x, this._currentCtxt.moveY + c.y);
                this.ctx.rotate(c.rotation * DEG_TO_ANGLE);
                this._clipShape.customDraw(this._currentCtxt);
                // this.ctx.restore();
                this.ctx.clip();
                this.ctx.setTransform(this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY, this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY);
                this.ctx.rotate(-c.rotation * DEG_TO_ANGLE);
            }
            this.customDraw(this._currentCtxt);
            // this.ctx.rotate(-this._currentCtxt.rotate * DEG_TO_ANGLE);
            // this.ctx.setTransform(ctxt.scaleX, ctxt.skewX, ctxt.skewY, ctxt.scaleY, ctxt.moveX, ctxt.moveY);
        }
    }
    setAnimationFunction(f) {
        this._aniFunc = f;
    }
    removeAnimationFunction() {
        this._aniFunc = undefined;
    }
    isHit(x, y) {
        if (this.hitArea === undefined) {
            return false;
        }
        return this.hitArea.isHit(x, y, this._currentCtxt, this);
    }
    withClip(clipShape) {
        this._clipShape = clipShape;
        return this;
    }
    withConstraint(...func) {
        this._constraints = func;
        return this;
    }
    withHitArea(...args) {
        const Clazz = args[0];
        if (Clazz === PixelHitArea_1.PixelHitArea && args[1] !== undefined) {
            this._hitArea = new PixelHitArea_1.PixelHitArea(this.canvas.width, this.canvas.height);
        }
        else if (typeof Clazz === "function") {
            const offset = args[1] || 1;
            this._hitArea = new Clazz(this.canvas.width, this.canvas.height, offset);
        }
        else {
            throw new ReferenceError("The first parameter must implement the IHitArea interface.");
        }
        return this;
    }
    addEventListener(event, listener) {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.addEventListener(event, (evt) => {
            if (this._hitArea !== undefined && this.isVisible && this.isHit(evt.clientX - rect.left, evt.clientY - rect.top)) {
                listener(this, event, evt);
            }
        }, false);
    }
    clear() {
        this._originX = 0;
        this._originY = 0;
        this.tweenManager.clear();
        this.boundary.reset();
        return this;
    }
}
exports.BaseShape = BaseShape;
//# sourceMappingURL=BaseShape.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
const Boundary_1 = __webpack_require__(17);
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
    originToCenter() {
        const [x, y] = this._boundary.center;
        return this.origin(x, y);
    }
    get numCurves() {
        return this._curves.length;
    }
    addCurve(curve) {
        this._curves.push(curve);
        const [p1, cp1, cp2, p2] = curve;
        this._boundary.setPoint(p1);
        this._boundary.setPoint(p2);
        this._boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = __webpack_require__(2);
const BaseStyle_1 = __webpack_require__(1);
const MathPIx2 = 6.2832; // 2 * Math.PI;
/**
 * Draws a filled and/or stroked circle.
 */
class CircleShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "Circle_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
    }
    get type() { return interfaces_1.ShapeType.SHAPE; }
    set width(v) { throw new ReferenceError(`LineShape width cannot be set (${v}).`); }
    set height(v) { throw new ReferenceError(`LineShape height cannot be set (${v}).`); }
    originToCenter() {
        return this.origin(0, 0);
    }
    set radius(r) {
        this.boundary.reset();
        this.boundary.setPoint([-r, -r]);
        this.boundary.setPoint([r, r]);
    }
    get radius() {
        return super.width / 2;
    }
    withRadius(r, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [r], ["radius"], callback);
        }
        else {
            this.radius = r;
        }
        return this;
    }
    traceShape(ctx) {
        ctx.beginPath();
        ctx.arc(0 - this.originX, 0 - this.originY, this.radius, 0, MathPIx2);
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
exports.CircleShape = CircleShape;
//# sourceMappingURL=CircleShape.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
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
    originToCenter() {
        const [x, y] = this.boundary.center;
        return this.origin(x, y);
    }
    addLine(line) {
        this._linePoints.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = __webpack_require__(2);
const BaseStyle_1 = __webpack_require__(1);
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
    originToCenter() {
        const [x, y] = this.boundary.center;
        return this.origin(x, y);
    }
    addLine(line) {
        this._sidesCollection.push(line);
        this.boundary.setPoint(line[0]);
        this.boundary.setPoint(line[1]);
        return this;
    }
    addBezier(curve) {
        this._sidesCollection.push(curve);
        const [p1, cp1, cp2, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + cp2[0] + p2[0]) / 4, (p1[0] + cp1[0] + cp2[0] + p2[0]) / 4]);
        return this;
    }
    addQuadratic(curve) {
        this._sidesCollection.push(curve);
        const [p1, cp1, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
/**
 * Draws a stroked line.
 */
class QuadraticCurveShape extends BaseStyle_1.BaseStyle {
    constructor(canvas, ctx, name = "QuadraticCurve_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
        super(canvas, ctx, name);
        this._curves = [];
    }
    get type() { return interfaces_1.ShapeType.SHAPE; }
    get numCurves() {
        return this._curves.length;
    }
    addCurve(curve) {
        this._curves.push(curve);
        const [p1, cp1, p2] = curve;
        this.boundary.setPoint(p1);
        this.boundary.setPoint(p2);
        this.boundary.setPoint([(p1[0] + cp1[0] + p2[0]) / 3, (p1[0] + cp1[0] + p2[0]) / 3]);
        return this;
    }
    clear() {
        super.clear();
        this._curves = [];
        return this;
    }
    traceShape(ctx) {
        if (this._curves.length < 1) {
            throw new ReferenceError(`QuadraticCurveShape (${this.name}) must have at least one Point.`);
        }
        const [[[x, y], [x2, y2], [x3, y3]], ...curvesTo] = this._curves;
        ctx.beginPath();
        ctx.moveTo(x - this.originX, y - this.originY);
        ctx.quadraticCurveTo(x2 - this.originX, y2 - this.originY, x3 - this.originX, y3 - this.originY);
        if (curvesTo !== undefined) {
            curvesTo.forEach(([, [_x2, _y2], [_x3, _y3]]) => ctx.quadraticCurveTo(_x2 - this.originX, _y2 - this.originY, _x3 - this.originX, _y3 - this.originY));
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
exports.QuadraticCurveShape = QuadraticCurveShape;
//# sourceMappingURL=QuadraticCurveShape.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseStyle_1 = __webpack_require__(1);
const interfaces_1 = __webpack_require__(2);
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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    TERMS OF USE - EASING EQUATIONS
    ---------------------------------------------------------------------------------
    Open source under the BSD License.
    Copyright © 2001 Robert Penner All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer. Redistributions in binary
    form must reproduce the above copyright notice, this list of conditions and
    the following disclaimer in the documentation and/or other materials provided
    with the distribution. Neither the name of the author nor the names of
    contributors may be used to endorse or promote products derived from this
    software without specific prior written permission.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    ---------------------------------------------------------------------------------
*/

Object.defineProperty(exports, "__esModule", { value: true });
const PI_M2 = 6.2832; // Math.PI * 2;
const PI_D2 = 1.5708; // Math.PI / 2;
/*
Linear
---------------------------------------------------------------------------------
*/
function easeLinear(t, b, c, d) {
    return c * t / d + b;
}
exports.easeLinear = easeLinear;
/*
Sine
---------------------------------------------------------------------------------
*/
function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * PI_D2) + c + b;
}
exports.easeInSine = easeInSine;
function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * PI_D2) + b;
}
exports.easeOutSine = easeOutSine;
function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
exports.easeInOutSine = easeInOutSine;
/*
Quintic
---------------------------------------------------------------------------------
*/
function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}
exports.easeInQuint = easeInQuint;
function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
exports.easeOutQuint = easeOutQuint;
function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}
exports.easeInOutQuint = easeInOutQuint;
/*
Quartic
---------------------------------------------------------------------------------
*/
function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}
exports.easeInQuart = easeInQuart;
function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
exports.easeOutQuart = easeOutQuart;
function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
exports.easeInOutQuart = easeInOutQuart;
/*
Quadratic
---------------------------------------------------------------------------------
*/
function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}
exports.easeInQuad = easeInQuad;
function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}
exports.easeOutQuad = easeOutQuad;
function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}
exports.easeInOutQuad = easeInOutQuad;
/*
Exponential
---------------------------------------------------------------------------------
*/
function easeInExpo(t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
exports.easeInExpo = easeInExpo;
function easeOutExpo(t, b, c, d) {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
exports.easeOutExpo = easeOutExpo;
function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
        return b;
    }
    if (t === d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
exports.easeInOutExpo = easeInOutExpo;
/*
Elastic
---------------------------------------------------------------------------------
*/
function easeInElastic(t, b, c, d, a, p) {
    let s;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    ;
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
}
exports.easeInElastic = easeInElastic;
function easeOutElastic(t, b, c, d, a, p) {
    let s;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    ;
    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * PI_M2 / p) + c + b);
}
exports.easeOutElastic = easeOutElastic;
function easeInOutElastic(t, b, c, d, a, p) {
    let s;
    if (t === 0) {
        return b;
    }
    if ((t /= d / 2) === 2) {
        return b + c;
    }
    if (!p) {
        p = d * (.3 * 1.5);
    }
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    if (t < 1) {
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p) * .5 + c + b;
}
exports.easeInOutElastic = easeInOutElastic;
/*
Circular
---------------------------------------------------------------------------------
*/
function easeInCircular(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
exports.easeInCircular = easeInCircular;
function easeOutCircular(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
exports.easeOutCircular = easeOutCircular;
function easeInOutCircular(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
exports.easeInOutCircular = easeInOutCircular;
/*
Back
---------------------------------------------------------------------------------
*/
function easeInBack(t, b, c, d, s = 1.70158) {
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
exports.easeInBack = easeInBack;
function easeOutBack(t, b, c, d, s = 1.70158) {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
exports.easeOutBack = easeOutBack;
function easeInOutBack(t, b, c, d, s = 1.70158) {
    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
}
exports.easeInOutBack = easeInOutBack;
/*
Bounce
---------------------------------------------------------------------------------
*/
function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
}
exports.easeInBounce = easeInBounce;
function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    }
    else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    }
    else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}
exports.easeOutBounce = easeOutBounce;
function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
        return easeInBounce(t * 2, 0, c, d) * .5 + b;
    }
    else {
        return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}
exports.easeInOutBounce = easeInOutBounce;
/*
Cubic
---------------------------------------------------------------------------------
*/
function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}
exports.easeInCubic = easeInCubic;
function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
exports.easeOutCubic = easeOutCubic;
function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}
exports.easeInOutCubic = easeInOutCubic;
//# sourceMappingURL=easing.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Boundary {
    constructor() {
        this._boundary = [[0, 0], [0, 0]];
    }
    setPoint(point) {
        const [[x1, y1], [x2, y2]] = this._boundary;
        this._boundary = [
            [Math.min(point[0], x1), Math.min(point[1], y1)],
            [Math.max(point[0], x2), Math.max(point[1], y2)],
        ];
    }
    get border() {
        const [[x1, y1], [x2, y2]] = this._boundary;
        return [[x1, y1], [x2, y2]];
    }
    get width() {
        const [[x1,], [x2,]] = this._boundary;
        return x2 - x1;
    }
    get height() {
        const [[, y1], [, y2]] = this._boundary;
        return y2 - y1;
    }
    get center() {
        const [[x1, y1], [x2, y2]] = this._boundary;
        return [(x2 + x1) / 2, (y2 + y1) / 2];
    }
    reset() {
        this._boundary = [[0, 0], [0, 0]];
    }
    clone() {
        const b = new Boundary();
        const [[x1, y1], [x2, y2]] = this._boundary;
        b._boundary = [[x1, y1], [x2, y2]];
        return b;
    }
}
exports.Boundary = Boundary;
//# sourceMappingURL=Boundary.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(18);
const common_1 = __webpack_require__(33);
const ngvas_component_1 = __webpack_require__(32);
const ngvas_arc_component_1 = __webpack_require__(23);
const ngvas_bezier_component_1 = __webpack_require__(24);
const ngvas_circle_component_1 = __webpack_require__(25);
const ngvas_image_component_1 = __webpack_require__(26);
const ngvas_line_component_1 = __webpack_require__(27);
const ngvas_polygon_component_1 = __webpack_require__(28);
const ngvas_quadratic_component_1 = __webpack_require__(29);
const ngvas_rectange_component_1 = __webpack_require__(30);
const ngvas_text_component_1 = __webpack_require__(31);
let NgvasModule = class NgvasModule {
};
NgvasModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
        ],
        declarations: [
            ngvas_component_1.NgvasComponent,
            ngvas_arc_component_1.NgvasArcComponent,
            ngvas_bezier_component_1.NgvasBezierCurveComponent,
            ngvas_circle_component_1.NgvasCircleComponent,
            ngvas_image_component_1.NgvasImageComponent,
            ngvas_line_component_1.NgvasLineComponent,
            ngvas_polygon_component_1.NgvasPolygonComponent,
            ngvas_quadratic_component_1.NgvasQuadraticCurveComponent,
            ngvas_rectange_component_1.NgvasRectangleComponent,
            ngvas_text_component_1.NgvasTextComponent,
        ],
        exports: [
            ngvas_component_1.NgvasComponent,
            ngvas_arc_component_1.NgvasArcComponent,
            ngvas_bezier_component_1.NgvasBezierCurveComponent,
            ngvas_circle_component_1.NgvasCircleComponent,
            ngvas_image_component_1.NgvasImageComponent,
            ngvas_line_component_1.NgvasLineComponent,
            ngvas_polygon_component_1.NgvasPolygonComponent,
            ngvas_quadratic_component_1.NgvasQuadraticCurveComponent,
            ngvas_rectange_component_1.NgvasRectangleComponent,
            ngvas_text_component_1.NgvasTextComponent,
        ],
    })
], NgvasModule);
exports.NgvasModule = NgvasModule;
//# sourceMappingURL=ngvas.module.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = __webpack_require__(2);
const BaseStyle_1 = __webpack_require__(1);
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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StyleManager {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctxValues = {};
    }
    get hasFill() {
        return !!this.ctxValues.fillStyle;
    }
    get hasStroke() {
        return !!this.ctxValues.lineWidth;
    }
    get lineWidth() {
        return this.ctxValues.lineWidth;
    }
    set opacity(alpha) {
        this.ctxValues.globalAlpha = alpha;
    }
    get opacity() {
        return this.ctxValues.globalAlpha;
    }
    compose(alpha, overlay) {
        this.ctxValues.globalAlpha = undefinedOr(alpha, this.ctxValues.globalAlpha);
        this.ctxValues.globalCompositeOperation = undefinedOr(overlay, this.ctxValues.globalCompositeOperation);
        return this;
    }
    withFill(style) {
        this.ctxValues.fillStyle = undefinedOr(style, this.ctxValues.fillStyle);
        return this;
    }
    withShadow(blur, color, offsetX, offsetY) {
        this.ctxValues.shadowBlur = undefinedOr(blur, this.ctxValues.shadowBlur);
        this.ctxValues.shadowColor = undefinedOr(color, this.ctxValues.shadowColor);
        this.ctxValues.shadowOffsetX = undefinedOr(offsetX, this.ctxValues.shadowOffsetX);
        this.ctxValues.shadowOffsetY = undefinedOr(offsetY, this.ctxValues.shadowOffsetY);
        return this;
    }
    withStroke(width, style, join, cap, dashOffset, miterLimit) {
        this.ctxValues.lineCap = undefinedOr(cap, this.ctxValues.lineCap);
        this.ctxValues.lineDashOffset = undefinedOr(dashOffset, this.ctxValues.lineDashOffset);
        this.ctxValues.lineJoin = undefinedOr(join, this.ctxValues.lineJoin);
        this.ctxValues.lineWidth = undefinedOr(width, this.ctxValues.lineWidth);
        this.ctxValues.strokeStyle = undefinedOr(style, this.ctxValues.strokeStyle);
        this.ctxValues.miterLimit = undefinedOr(miterLimit, this.ctxValues.miterLimit);
        return this;
    }
    withText() {
        throw new Error("This method is not supported in StyleManager.");
    }
    textStyle(font, align, baseline) {
        this.ctxValues.font = undefinedOr(font, this.ctxValues.font);
        this.ctxValues.textAlign = undefinedOr(align, this.ctxValues.textAlign);
        this.ctxValues.textBaseline = undefinedOr(baseline, this.ctxValues.textBaseline);
        return this;
    }
    begin() {
        this.ctx.save();
        for (const p in this.ctxValues) {
            if (this.ctxValues.hasOwnProperty(p)) {
                this.ctx[p] = this.ctxValues[p];
            }
        }
    }
    end() {
        this.ctx.restore();
    }
    clear() {
        this.ctxValues = {};
    }
}
exports.StyleManager = StyleManager;
function undefinedOr(arg, ctxProp) {
    return arg !== undefined ? arg : ctxProp;
}
//# sourceMappingURL=StyleManager.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = __webpack_require__(16);
class TweenManager {
    constructor() {
        this._collection = [];
    }
    tween() {
        this._collection = this._collection.filter(f => f());
    }
    clear() {
        this._collection = [];
    }
    addTween(shape, tween, duration, toValues, paramKeys, callback) {
        const start = Date.now();
        const end = Date.now() + duration;
        const startValues = paramKeys.map(k => shape[k]);
        tween = tween || easing_1.easeLinear;
        this._collection.push(function () {
            const now = Date.now();
            if (now >= end) {
                paramKeys.forEach(function (k, i) { shape[k] = toValues[i]; });
                if (callback !== undefined) {
                    callback(shape);
                }
                return false;
            }
            const results = startValues.map((v, i) => tween(now - start, v, toValues[i] - v, duration));
            paramKeys.forEach(function (p, i) { shape[p] = results[i]; });
            return true;
        });
    }
}
exports.TweenManager = TweenManager;
//# sourceMappingURL=TweenManager.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const ArcShape_1 = __webpack_require__(6);
const base_component_1 = __webpack_require__(3);
let NgvasArcComponent = NgvasArcComponent_1 = class NgvasArcComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(ArcShape_1.ArcShape);
    }
    set radius(r) { this.execOrDelay((s) => s.radius = r); }
    ;
    set angle(deg) { this.execOrDelay((s) => s.angle = deg); }
    ;
    set radier(v) {
        this.execOrDelay((s) => s.withRadius(v[0], v[1], v[2]));
    }
    set angler(v) {
        this.execOrDelay((s) => s.withAngle(v[0], v[1], v[2]));
    }
};
__decorate([
    core_1.Input("radius"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasArcComponent.prototype, "radius", null);
__decorate([
    core_1.Input("angle"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasArcComponent.prototype, "angle", null);
__decorate([
    core_1.Input("radier"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasArcComponent.prototype, "radier", null);
__decorate([
    core_1.Input("angler"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasArcComponent.prototype, "angler", null);
NgvasArcComponent = NgvasArcComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-arc",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasArcComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasArcComponent);
exports.NgvasArcComponent = NgvasArcComponent;
var NgvasArcComponent_1;
//# sourceMappingURL=ngvas-arc.component.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const BezierCurveShape_1 = __webpack_require__(8);
const base_component_1 = __webpack_require__(3);
let NgvasBezierCurveComponent = NgvasBezierCurveComponent_1 = class NgvasBezierCurveComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(BezierCurveShape_1.BezierCurveShape);
    }
    set curves(cs) { this.execOrDelay((s) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); }
    ;
};
__decorate([
    core_1.Input("curves"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBezierCurveComponent.prototype, "curves", null);
NgvasBezierCurveComponent = NgvasBezierCurveComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-bezier",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasBezierCurveComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasBezierCurveComponent);
exports.NgvasBezierCurveComponent = NgvasBezierCurveComponent;
var NgvasBezierCurveComponent_1;
//# sourceMappingURL=ngvas-bezier.component.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const CircleShape_1 = __webpack_require__(9);
const base_component_1 = __webpack_require__(3);
let NgvasCircleComponent = NgvasCircleComponent_1 = class NgvasCircleComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(CircleShape_1.CircleShape);
    }
    set radius(r) { this.execOrDelay((s) => s.radius = r); }
    ;
    set radier(v) {
        this.execOrDelay((s) => s.withRadius(v[0], v[1], v[2]));
    }
};
__decorate([
    core_1.Input("radius"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasCircleComponent.prototype, "radius", null);
__decorate([
    core_1.Input("radier"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasCircleComponent.prototype, "radier", null);
NgvasCircleComponent = NgvasCircleComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-circle",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasCircleComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasCircleComponent);
exports.NgvasCircleComponent = NgvasCircleComponent;
var NgvasCircleComponent_1;
//# sourceMappingURL=ngvas-circle.component.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const ImageShape_1 = __webpack_require__(10);
const base_component_1 = __webpack_require__(3);
let NgvasImageComponent = NgvasImageComponent_1 = class NgvasImageComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(ImageShape_1.ImageShape);
    }
    set image(i) { this.execOrDelay((s) => s.withImage(i)); }
    ;
};
__decorate([
    core_1.Input("image"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgvasImageComponent.prototype, "image", null);
NgvasImageComponent = NgvasImageComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-image",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasImageComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasImageComponent);
exports.NgvasImageComponent = NgvasImageComponent;
var NgvasImageComponent_1;
//# sourceMappingURL=ngvas-image.component.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const LineShape_1 = __webpack_require__(11);
const base_component_1 = __webpack_require__(3);
let NgvasLineComponent = NgvasLineComponent_1 = class NgvasLineComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(LineShape_1.LineShape);
    }
    set lines(ls) { this.execOrDelay((s) => { s.clear(); ls.forEach(l => s.addLine(l)); }); }
    ;
};
__decorate([
    core_1.Input("lines"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasLineComponent.prototype, "lines", null);
NgvasLineComponent = NgvasLineComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-line",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasLineComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasLineComponent);
exports.NgvasLineComponent = NgvasLineComponent;
var NgvasLineComponent_1;
//# sourceMappingURL=ngvas-line.component.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const PolyShape_1 = __webpack_require__(12);
const base_component_1 = __webpack_require__(3);
let NgvasPolygonComponent = NgvasPolygonComponent_1 = class NgvasPolygonComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(PolyShape_1.PolyShape);
    }
    set sides(ls) {
        this.execOrDelay((s) => {
            s.clear();
            for (const l of ls) {
                if (l.length === 2) {
                    s.addLine(l);
                }
                else if (l.length === 3) {
                    s.addQuadratic(l);
                }
                else if (l.length === 4) {
                    s.addBezier(l);
                }
            }
        });
    }
    ;
};
__decorate([
    core_1.Input("sides"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasPolygonComponent.prototype, "sides", null);
NgvasPolygonComponent = NgvasPolygonComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-polygon",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasPolygonComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasPolygonComponent);
exports.NgvasPolygonComponent = NgvasPolygonComponent;
var NgvasPolygonComponent_1;
//# sourceMappingURL=ngvas-polygon.component.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const QuadraticCurveShape_1 = __webpack_require__(13);
const base_component_1 = __webpack_require__(3);
let NgvasQuadraticCurveComponent = NgvasQuadraticCurveComponent_1 = class NgvasQuadraticCurveComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(QuadraticCurveShape_1.QuadraticCurveShape);
    }
    set curves(cs) { this.execOrDelay((s) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); }
    ;
};
__decorate([
    core_1.Input("curves"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasQuadraticCurveComponent.prototype, "curves", null);
NgvasQuadraticCurveComponent = NgvasQuadraticCurveComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-quadratic",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasQuadraticCurveComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasQuadraticCurveComponent);
exports.NgvasQuadraticCurveComponent = NgvasQuadraticCurveComponent;
var NgvasQuadraticCurveComponent_1;
//# sourceMappingURL=ngvas-quadratic.component.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const RectShape_1 = __webpack_require__(14);
const base_component_1 = __webpack_require__(3);
let NgvasRectangleComponent = NgvasRectangleComponent_1 = class NgvasRectangleComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(RectShape_1.RectShape);
    }
};
NgvasRectangleComponent = NgvasRectangleComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-rectangle",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasRectangleComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasRectangleComponent);
exports.NgvasRectangleComponent = NgvasRectangleComponent;
var NgvasRectangleComponent_1;
//# sourceMappingURL=ngvas-rectange.component.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

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
const core_1 = __webpack_require__(0);
const TextShape_1 = __webpack_require__(15);
const base_component_1 = __webpack_require__(3);
let NgvasTextComponent = NgvasTextComponent_1 = class NgvasTextComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(TextShape_1.TextShape);
    }
    set text(t) { this.execOrDelay((s) => s.text = t); }
    ;
    set textStyle(t) {
        this.execOrDelay((s) => s.textStyle(t.font, t.align, t.baseline));
    }
    ;
};
__decorate([
    core_1.Input("text"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgvasTextComponent.prototype, "text", null);
__decorate([
    core_1.Input("textStyle"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasTextComponent.prototype, "textStyle", null);
NgvasTextComponent = NgvasTextComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-text",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasTextComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasTextComponent);
exports.NgvasTextComponent = NgvasTextComponent;
var NgvasTextComponent_1;
//# sourceMappingURL=ngvas-text.component.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const platform_browser_1 = __webpack_require__(18);
const CanvasGroup_1 = __webpack_require__(4);
const base_component_1 = __webpack_require__(3);
let NgvasComponent = class NgvasComponent {
    constructor(document, elRef) {
        this.document = document;
        this.elRef = elRef;
        this._width = 0;
        this._height = 0;
        this._isActive = true;
        this._shape = new core_1.EventEmitter();
    }
    set width(w) {
        this._width = +w;
    }
    set height(h) {
        this._height = +h;
    }
    set active(a) {
        this._isActive = a;
    }
    get shape() {
        return this._shape;
    }
    getShape() {
        return this._canvasGroup;
    }
    /**
     * Fires once after ng-content is intitialized.
     */
    ngAfterContentInit() {
        const canvas = this.document.createElement("canvas");
        canvas.width = this._width;
        canvas.height = this._height;
        this.elRef.nativeElement.appendChild(canvas);
        this._canvasGroup = new CanvasGroup_1.CanvasGroup(canvas, undefined, this._isActive);
        this.contentChildren.forEach(c => this._canvasGroup.addChild(c.initShape(this._canvasGroup.context)));
        this.shape.emit(this._canvasGroup);
        this._contentSubscription = this.contentChildren.changes
            .subscribe(c => {
            this._canvasGroup.removeAllChildren();
            c.forEach((c2) => this._canvasGroup.addChild(c2.initShape(this._canvasGroup.context)));
        });
    }
    /**
     * Fires when the component is destroyed.
     */
    ngOnDestroy() {
        this._canvasGroup.isActive = false;
        this._canvasGroup.removeAllChildren();
        if (this._contentSubscription !== undefined) {
            this._contentSubscription.unsubscribe();
        }
    }
};
__decorate([
    core_1.ContentChildren(base_component_1.NgvasBaseComponent),
    __metadata("design:type", core_1.QueryList)
], NgvasComponent.prototype, "contentChildren", void 0);
__decorate([
    core_1.Input("width"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasComponent.prototype, "width", null);
__decorate([
    core_1.Input("height"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasComponent.prototype, "height", null);
__decorate([
    core_1.Input("active"),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], NgvasComponent.prototype, "active", null);
__decorate([
    core_1.Output("shape"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgvasComponent.prototype, "shape", null);
NgvasComponent = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas",
        template: "<ng-content></ng-content>",
        styles: [":not(canvas) { display: none; }"],
    }),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __param(1, core_1.Inject(core_1.ElementRef)),
    __metadata("design:paramtypes", [Document,
        core_1.ElementRef])
], NgvasComponent);
exports.NgvasComponent = NgvasComponent;
//# sourceMappingURL=ngvas.component.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PixelHitArea_1 = __webpack_require__(5);
const BaseStyle_1 = __webpack_require__(1);
const _tweenEasings = __webpack_require__(16);
const CanvasGroup_1 = __webpack_require__(4);
const ArcShape_1 = __webpack_require__(6);
const BaseShape_1 = __webpack_require__(7);
const BezierCurveShape_1 = __webpack_require__(8);
const CircleShape_1 = __webpack_require__(9);
const ImageShape_1 = __webpack_require__(10);
const LineShape_1 = __webpack_require__(11);
const PolyShape_1 = __webpack_require__(12);
const QuadraticCurveShape_1 = __webpack_require__(13);
const RectShape_1 = __webpack_require__(14);
const TextShape_1 = __webpack_require__(15);
var ngvas_module_1 = __webpack_require__(19);
exports.NgvasModule = ngvas_module_1.NgvasModule;
var library;
(function (library) {
    var hitAreas;
    (function (hitAreas) {
        hitAreas.PixelHitArea = PixelHitArea_1.PixelHitArea;
    })(hitAreas = library.hitAreas || (library.hitAreas = {}));
    var tweens;
    (function (tweens) {
        tweens.easings = _tweenEasings;
    })(tweens = library.tweens || (library.tweens = {}));
    library.BaseShape = BaseShape_1.BaseShape;
    library.BaseStyle = BaseStyle_1.BaseStyle;
    library.CanvasGroup = CanvasGroup_1.CanvasGroup;
    library.ArcShape = ArcShape_1.ArcShape;
    library.BezierCurveShape = BezierCurveShape_1.BezierCurveShape;
    library.CircleShape = CircleShape_1.CircleShape;
    library.ImageShape = ImageShape_1.ImageShape;
    library.LineShape = LineShape_1.LineShape;
    library.PolyShape = PolyShape_1.PolyShape;
    library.QuadraticCurveShape = QuadraticCurveShape_1.QuadraticCurveShape;
    library.RectShape = RectShape_1.RectShape;
    library.TextShape = TextShape_1.TextShape;
})(library = exports.library || (exports.library = {}));
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});