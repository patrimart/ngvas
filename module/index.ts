
import * as _shapes   from "./canvas/shapes/interfaces";

import * as _hitAreas                    from "./canvas/hit-area/interfaces";
import { PixelHitArea as _PixelHitArea } from "./canvas/hit-area/PixelHitArea";

import * as _styles                from "./canvas/styles/interfaces";
import { BaseStyle as _BaseStyle } from "./canvas/styles/BaseStyle";

import { TweenFunc as _TF }   from "./canvas/tweens/interfaces";
import * as _tweenEasings     from "./canvas/tweens/easing";

import { CanvasGroup as _CanvasGroup }                 from "./canvas/CanvasGroup";
import { ArcShape as _ArcShape }                       from "./canvas/shapes/ArcShape";
import { BaseShape as _BaseShape }                     from "./canvas/shapes/BaseShape";
import { BezierCurveShape as _BezierCurveShape }       from "./canvas/shapes/BezierCurveShape";
import { CircleShape as _CircleShape }                 from "./canvas/shapes/CircleShape";
import { ImageShape as _ImageShape }                   from "./canvas/shapes/ImageShape";
import { LineShape as _LineShape }                     from "./canvas/shapes/LineShape";
import { PolyShape as _PolyShape }                     from "./canvas/shapes/PolyShape";
import { QuadraticCurveShape as _QuadraticCurveShape } from "./canvas/shapes/QuadraticCurveShape";
import { RectShape as _RectShape }                     from "./canvas/shapes/RectShape";
import { TextShape as _TextShape }                     from "./canvas/shapes/TextShape";

export { NgvasModule } from "./ngvas.module";

import { TweenInput as _TweenInput } from "./components/interfaces";


export namespace types {
    export type Point = _shapes.Point;
    export type Line = _shapes.Line;
    export type QuadraticCurve = _shapes.QuadraticCurve;
    export type BezierCurve = _shapes.BezierCurve;
    export type ContextTransformer = _shapes.ContextTransformer;

    export type ComposeOverlay = _styles.ComposeOverlay;
    export type ColorStyle = _styles.ColorStyle;
    export type LineJoin = _styles.LineJoin;
    export type LineCap = _styles.LineCap;
    export type TextAlign = _styles.TextAlign;
    export type TextBaseline = _styles.TextBaseline;

    export type TweenInput<S extends _BaseStyle, V> = _TweenInput<S, V>;
}

export namespace hitAreas {
    export type IHitAres = _hitAreas.IHitArea;
    export const PixelHitArea = _PixelHitArea;
}

export namespace tweens {
    export type TweenFunc = _TF;
    export const easings = _tweenEasings;
}

export namespace shapes {
    export const BaseShape = _BaseShape;
    export const BaseStyle = _BaseStyle;
    export const CanvasGroup = _CanvasGroup;
    export const ArcShape = _ArcShape;
    export const BezierCurveShape = _BezierCurveShape;
    export const CircleShape = _CircleShape;
    export const ImageShape = _ImageShape;
    export const LineShape = _LineShape;
    export const PolyShape = _PolyShape;
    export const QuadraticCurveShape = _QuadraticCurveShape;
    export const RectShape = _RectShape;
    export const TextShape = _TextShape;
}
