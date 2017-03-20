"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PixelHitArea_1 = require("./canvas/hit-area/PixelHitArea");
const BaseStyle_1 = require("./canvas/styles/BaseStyle");
const _tweenEasings = require("./canvas/tweens/easing");
const CanvasGroup_1 = require("./canvas/CanvasGroup");
const ArcShape_1 = require("./canvas/shapes/ArcShape");
const BaseShape_1 = require("./canvas/shapes/BaseShape");
const BezierCurveShape_1 = require("./canvas/shapes/BezierCurveShape");
const CircleShape_1 = require("./canvas/shapes/CircleShape");
const ImageShape_1 = require("./canvas/shapes/ImageShape");
const LineShape_1 = require("./canvas/shapes/LineShape");
const PolyShape_1 = require("./canvas/shapes/PolyShape");
const QuadraticCurveShape_1 = require("./canvas/shapes/QuadraticCurveShape");
const RectShape_1 = require("./canvas/shapes/RectShape");
const TextShape_1 = require("./canvas/shapes/TextShape");
var ngvas_module_1 = require("./ngvas.module");
exports.NgvasModule = ngvas_module_1.NgvasModule;
var hitAreas;
(function (hitAreas) {
    hitAreas.PixelHitArea = PixelHitArea_1.PixelHitArea;
})(hitAreas = exports.hitAreas || (exports.hitAreas = {}));
var tweens;
(function (tweens) {
    tweens.easings = _tweenEasings;
})(tweens = exports.tweens || (exports.tweens = {}));
var shapes;
(function (shapes) {
    shapes.BaseShape = BaseShape_1.BaseShape;
    shapes.BaseStyle = BaseStyle_1.BaseStyle;
    shapes.CanvasGroup = CanvasGroup_1.CanvasGroup;
    shapes.ArcShape = ArcShape_1.ArcShape;
    shapes.BezierCurveShape = BezierCurveShape_1.BezierCurveShape;
    shapes.CircleShape = CircleShape_1.CircleShape;
    shapes.ImageShape = ImageShape_1.ImageShape;
    shapes.LineShape = LineShape_1.LineShape;
    shapes.PolyShape = PolyShape_1.PolyShape;
    shapes.QuadraticCurveShape = QuadraticCurveShape_1.QuadraticCurveShape;
    shapes.RectShape = RectShape_1.RectShape;
    shapes.TextShape = TextShape_1.TextShape;
})(shapes = exports.shapes || (exports.shapes = {}));
//# sourceMappingURL=index.js.map