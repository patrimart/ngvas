import * as _interfaces from "./interfaces";
import { Group } from "./Group";
import { CanvasGroup } from "./CanvasGroup";
import { IShape as _IShape, IShapeProps as _IShapeProps, ContextTransformer as _CT, Point as _Point, BaseShape, ArcShape, BezierCurveShape, CircleShape, ImageShape, LineShape, PolyShape, RectShape, TextShape, QuadraticCurveShape } from "./shapes/";
import * as _hitAreas from "./hit-area/";
import * as _styles from "./styles/interfaces";
import * as _tweens from "./tweens/";
export declare namespace interfaces {
    type IGroup = _interfaces.IGroup;
    type IShape = _IShape;
    type IShapProps = _IShapeProps;
    type Point = _Point;
    type ContextTransformer = _CT;
    type IHitArea = _hitAreas.IHitArea;
    type TweenFunc = _tweens.TweenFunc;
    type ComposeOverlay = _styles.ComposeOverlay;
    type ColorStyle = _styles.ColorStyle;
    type LineJoin = _styles.LineJoin;
    type LineCap = _styles.LineCap;
    type TextAlign = _styles.TextAlign;
    type TextBaseline = _styles.TextBaseline;
}
export declare const hitAreas: typeof _hitAreas;
export declare const tweens: typeof _tweens;
export declare function init(canvas: HTMLCanvasElement, isActive?: boolean): {
    getCanvasGroup(): CanvasGroup;
    addChild(...shape: BaseShape[]): void;
    Group(name?: string): Group;
    Arc(name?: string): ArcShape;
    BezierCurve(name?: string): BezierCurveShape;
    Circle(name?: string): CircleShape;
    Poly(name?: string): PolyShape;
    Image(name?: string): ImageShape;
    Line(name?: string): LineShape;
    Rectangle(name?: string): RectShape;
    Text(name?: string): TextShape;
    QuadraticCurve(name?: string): QuadraticCurveShape;
};
