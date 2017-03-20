import * as _shapes from "./canvas/shapes/interfaces";
import * as _hitAreas from "./canvas/hit-area/interfaces";
import { PixelHitArea as _PixelHitArea } from "./canvas/hit-area/PixelHitArea";
import * as _styles from "./canvas/styles/interfaces";
import { BaseStyle as _BaseStyle } from "./canvas/styles/BaseStyle";
import { TweenFunc as _TF } from "./canvas/tweens/interfaces";
import * as _tweenEasings from "./canvas/tweens/easing";
import { CanvasGroup as _CanvasGroup } from "./canvas/CanvasGroup";
import { ArcShape as _ArcShape } from "./canvas/shapes/ArcShape";
import { BaseShape as _BaseShape } from "./canvas/shapes/BaseShape";
import { BezierCurveShape as _BezierCurveShape } from "./canvas/shapes/BezierCurveShape";
import { CircleShape as _CircleShape } from "./canvas/shapes/CircleShape";
import { ImageShape as _ImageShape } from "./canvas/shapes/ImageShape";
import { LineShape as _LineShape } from "./canvas/shapes/LineShape";
import { PolyShape as _PolyShape } from "./canvas/shapes/PolyShape";
import { QuadraticCurveShape as _QuadraticCurveShape } from "./canvas/shapes/QuadraticCurveShape";
import { RectShape as _RectShape } from "./canvas/shapes/RectShape";
import { TextShape as _TextShape } from "./canvas/shapes/TextShape";
export { NgvasModule } from "./ngvas.module";
import { TweenInput as _TweenInput } from "./components/interfaces";
export declare namespace types {
    type Point = _shapes.Point;
    type Line = _shapes.Line;
    type QuadraticCurve = _shapes.QuadraticCurve;
    type BezierCurve = _shapes.BezierCurve;
    type ContextTransformer = _shapes.ContextTransformer;
    type ComposeOverlay = _styles.ComposeOverlay;
    type ColorStyle = _styles.ColorStyle;
    type LineJoin = _styles.LineJoin;
    type LineCap = _styles.LineCap;
    type TextAlign = _styles.TextAlign;
    type TextBaseline = _styles.TextBaseline;
    type TweenInput<S extends _BaseStyle, V> = _TweenInput<S, V>;
}
export declare namespace hitAreas {
    type IHitAres = _hitAreas.IHitArea;
    const PixelHitArea: typeof _PixelHitArea;
}
export declare namespace tweens {
    type TweenFunc = _TF;
    const easings: typeof _tweenEasings;
}
export declare namespace shapes {
    const BaseShape: typeof _BaseShape;
    const BaseStyle: typeof _BaseStyle;
    const CanvasGroup: typeof _CanvasGroup;
    const ArcShape: typeof _ArcShape;
    const BezierCurveShape: typeof _BezierCurveShape;
    const CircleShape: typeof _CircleShape;
    const ImageShape: typeof _ImageShape;
    const LineShape: typeof _LineShape;
    const PolyShape: typeof _PolyShape;
    const QuadraticCurveShape: typeof _QuadraticCurveShape;
    const RectShape: typeof _RectShape;
    const TextShape: typeof _TextShape;
}
