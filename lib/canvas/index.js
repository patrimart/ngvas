"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Group_1 = require("./Group");
const CanvasGroup_1 = require("./CanvasGroup");
const _1 = require("./shapes/");
const _hitAreas = require("./hit-area/");
const _tweens = require("./tweens/");
exports.hitAreas = _hitAreas;
exports.tweens = _tweens;
function init(canvas, isActive = false) {
    const cg = new CanvasGroup_1.CanvasGroup(canvas, undefined, isActive);
    return {
        getCanvasGroup() {
            return cg;
        },
        addChild(...shape) {
            shape.forEach(s => cg.addChild(s));
        },
        Group(name = "Group_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
            return new Group_1.Group(canvas, cg.context, name);
        },
        Arc(name) {
            return new _1.ArcShape(canvas, cg.context, name);
        },
        BezierCurve(name) {
            return new _1.BezierCurveShape(canvas, cg.context, name);
        },
        Circle(name) {
            return new _1.CircleShape(canvas, cg.context, name);
        },
        Poly(name) {
            return new _1.PolyShape(canvas, cg.context, name);
        },
        Image(name) {
            return new _1.ImageShape(canvas, cg.context, name);
        },
        Line(name) {
            return new _1.LineShape(canvas, cg.context, name);
        },
        Rectangle(name) {
            return new _1.RectShape(canvas, cg.context, name);
        },
        Text(name) {
            return new _1.TextShape(canvas, cg.context, name);
        },
        QuadraticCurve(name) {
            return new _1.QuadraticCurveShape(canvas, cg.context, name);
        },
    };
}
exports.init = init;
//# sourceMappingURL=index.js.map