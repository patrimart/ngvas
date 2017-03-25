
import * as _interfaces from "./interfaces";
import { Group }        from "./Group";
import { CanvasGroup }  from "./CanvasGroup";
import {
    IShape as _IShape, IShapeProps as _IShapeProps, ContextTransformer as _CT, Point as _Point,
    BaseShape, ArcShape, BezierCurveShape, CircleShape, ImageShape, LineShape,
    PolyShape, RectShape, TextShape, QuadraticCurveShape
} from "./shapes/";
import * as _hitAreas from "./hit-area/";
import * as _styles   from "./styles/interfaces";
import * as _tweens   from "./tweens/";


export namespace interfaces {
    export type IGroup = _interfaces.IGroup;
    export type IShape = _IShape;
    export type IShapProps = _IShapeProps;
    export type Point = _Point;
    export type ContextTransformer = _CT;

    export type IHitArea = _hitAreas.IHitArea;

    export type TweenFunc = _tweens.TweenFunc;

    export type ComposeOverlay = _styles.ComposeOverlay;

    export type ColorStyle = _styles.ColorStyle;
    export type LineJoin = _styles.LineJoin;
    export type LineCap = _styles.LineCap;
    export type TextAlign = _styles.TextAlign;
    export type TextBaseline = _styles.TextBaseline;
}

export const hitAreas = _hitAreas;
export const tweens = _tweens;


export function init (canvas: HTMLCanvasElement, isActive = false) {

    const cg = new CanvasGroup(canvas, undefined, isActive);

    return {

        getCanvasGroup () {
            return cg;
        },

        addChild (...shape: BaseShape[]) {
            shape.forEach(s => cg.addChild(s));
        },

        Group (name = "Group_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) {
            return new Group(canvas, cg.context, name);
        },

        Arc (name?: string) {
            return new ArcShape(canvas, cg.context, name);
        },

        BezierCurve (name?: string) {
            return new BezierCurveShape(canvas, cg.context, name);
        },

        Circle (name?: string) {
            return new CircleShape(canvas, cg.context, name);
        },

        Poly (name?: string) {
            return new PolyShape(canvas, cg.context, name);
        },

        Image (name?: string) {
            return new ImageShape(canvas, cg.context, name);
        },

        Line (name?: string) {
            return new LineShape(canvas, cg.context, name);
        },

        Rectangle (name?: string) {
            return new RectShape(canvas, cg.context, name);
        },

        Text (name?: string) {
            return new TextShape(canvas, cg.context, name);
        },

        QuadraticCurve (name?: string) {
            return new QuadraticCurveShape(canvas, cg.context, name);
        },
    };
}
