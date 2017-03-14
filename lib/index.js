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