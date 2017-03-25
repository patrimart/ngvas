"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PixelHitArea_1 = require("../hit-area/PixelHitArea");
const TweenManager_1 = require("../tweens/TweenManager");
const Boundary_1 = require("../Boundary");
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
        this._aniFunc = null;
        this._constraints = [];
        this._eventHandlers = {};
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
        this._originToCenter = false;
        this.tweenManager = new TweenManager_1.TweenManager();
        this.boundary = new Boundary_1.Boundary();
    }
    get name() { return this._name; }
    set x(v) { this._x = v; }
    get x() { return this._x; }
    set y(v) { this._y = v; }
    get y() { return this._y; }
    set width(v) {
        const h = this.height;
        this.boundary.reset();
        this.boundary.setPoint([0, 0]);
        this.boundary.setPoint([v, h]);
        if (this._originToCenter) {
            this.originToCenter = true;
        }
    }
    get width() { return this.boundary.width; }
    set height(v) {
        const w = this.width;
        this.boundary.reset();
        this.boundary.setPoint([0, 0]);
        this.boundary.setPoint([w, v]);
        if (this._originToCenter) {
            this.originToCenter = true;
        }
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
    set originToCenter(v) {
        this._originToCenter = v;
        if (v) {
            [this.originX, this.originY] = this.boundary.center;
        }
    }
    get originToCenter() { return this._originToCenter; }
    getBoundary() {
        return this.boundary.clone();
    }
    get hitArea() { return this._hitArea; }
    get contextTransform() { return Object.assign({}, this._currentCtxt); }
    origin(x, y, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [x, y], ["originX", "originY"], callback, 4);
        }
        else {
            this.originX = x;
            this.originY = y;
        }
        return this;
    }
    resize(w, h = w, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [w, h], ["width", "height"], callback, 5);
        }
        else {
            this.width = w;
            this.height = h;
        }
        return this;
    }
    rotate(deg, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.rotation + deg], ["rotation"], callback);
        }
        else {
            this.rotation += deg;
        }
        return this;
    }
    scale(x, y = x, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.scaleX * x, this.scaleY * y], ["scaleX", "scaleY"], callback, 20);
        }
        else {
            this.scaleX *= x;
            this.scaleY *= y;
        }
        return this;
    }
    skew(x, y = x, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.skewX + x, this.skewY + y], ["skewX", "skewY"], callback, 9);
        }
        else {
            this.skewX += x;
            this.skewY += y;
        }
        return this;
    }
    translate(x, y, duration = 0, tween, callback) {
        if (duration > 1) {
            this.tweenManager.addTween(this, tween, duration, [this.x + x, this.y + y], ["x", "y"], callback, 1);
        }
        else {
            this.x += x;
            this.y += y;
        }
        return this;
    }
    draw(ctxt) {
        if (this.isActive) {
            if (this._aniFunc !== null && !this._aniFunc(this)) {
                this._aniFunc = null;
            }
            this.tweenManager.tween();
            this._constraints.forEach(c => c(this));
        }
        if (this.isVisible) {
            this._currentCtxt.scaleX = ctxt.scaleX * this.scaleX;
            this._currentCtxt.scaleY = ctxt.scaleY * this.scaleY;
            this._currentCtxt.skewX = ctxt.skewX + (this.skewX * DEG_TO_ANGLE);
            this._currentCtxt.skewY = ctxt.skewY + (this.skewY * DEG_TO_ANGLE);
            this._currentCtxt.moveX = ctxt.moveX + this.x;
            this._currentCtxt.moveY = ctxt.moveY + this.y;
            this._currentCtxt.rotate = ctxt.rotate + this.rotation;
            this.ctx.setTransform(this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY, this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY);
            this.ctx.rotate(this._currentCtxt.rotate * DEG_TO_ANGLE);
            if (this._clipShape !== undefined) {
                const c = this._clipShape;
                // this.ctx.save();
                this.ctx.setTransform(this._currentCtxt.scaleX * c.scaleX, this._currentCtxt.skewX + (c.skewX * DEG_TO_ANGLE), this._currentCtxt.skewY + (c.skewY * DEG_TO_ANGLE), this._currentCtxt.scaleY * c.scaleY, this._currentCtxt.moveX + c.x, this._currentCtxt.moveY + c.y);
                this.ctx.rotate(c.rotation * DEG_TO_ANGLE);
                this._clipShape.customDraw(this._currentCtxt);
                // this.ctx.restore();
                this.ctx.clip();
                this.ctx.setTransform(this._currentCtxt.scaleX, this._currentCtxt.skewX, this._currentCtxt.skewY, this._currentCtxt.scaleY, this._currentCtxt.moveX, this._currentCtxt.moveY);
                this.ctx.rotate(-c.rotation * DEG_TO_ANGLE);
            }
            this.customDraw(this._currentCtxt);
        }
    }
    setAnimationFunction(f) {
        this._aniFunc = f;
    }
    removeAnimationFunction() {
        this._aniFunc = null;
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
        this.removeEventListener(event);
        const rect = this.canvas.getBoundingClientRect();
        if (event === "click" || event === "dblclick") {
            this.canvas.addEventListener(event, this._eventHandlers[event] = (evt) => {
                const clientX = evt.clientX - rect.left, clientY = evt.clientY - rect.top;
                if (this.isVisible && this.isHit(clientX, clientY)) {
                    listener(evt);
                }
            }, false);
        }
        else if (event === "wheel") {
            this.canvas.addEventListener(event, this._eventHandlers.wheel = (evt) => {
                const clientX = evt.clientX - rect.left, clientY = evt.clientY - rect.top;
                if (this.isVisible && this.isHit(clientX, clientY)) {
                    listener(evt);
                }
            }, false);
        }
        else if (event === "mouseenter" || event === "mouseleave") {
            this._eventHandlers[event] = (evt) => listener(evt);
            if ("mousemove" in this._eventHandlers === false) {
                let isOver = false;
                this.canvas.addEventListener("mousemove", this._eventHandlers.mousemove = (evt) => {
                    const clientX = evt.clientX - rect.left, clientY = evt.clientY - rect.top;
                    const isHit = this.isVisible && this.isHit(clientX, clientY);
                    if (isOver && !isHit) {
                        this.canvas.style.cursor = "default";
                        isOver = false;
                        if ("mouseleave" in this._eventHandlers) {
                            this._eventHandlers.mouseleave(evt);
                        }
                    }
                    else if (!isOver && isHit) {
                        this.canvas.style.cursor = "pointer";
                        isOver = true;
                        if ("mouseenter" in this._eventHandlers) {
                            this._eventHandlers.mouseenter(evt);
                        }
                    }
                }, false);
            }
        }
    }
    removeEventListener(event) {
        if (event in this._eventHandlers) {
            this.canvas.removeEventListener(event, this._eventHandlers[event]);
            delete this._eventHandlers[event];
        }
        if ("mousemove" in this._eventHandlers && "mouseenter" in this._eventHandlers === false && "mouseleave" in this._eventHandlers === false) {
            this.canvas.removeEventListener("mousemove", this._eventHandlers.mousemove);
            delete this._eventHandlers.mousemove;
        }
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