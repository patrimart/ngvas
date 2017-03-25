import { EventEmitter } from "@angular/core";
import { ComposeOverlay, ColorStyle, LineJoin, LineCap } from "../canvas/styles/interfaces";
import { BaseStyle, BaseStyleConstructor } from "../canvas/styles/BaseStyle";
import { ConstraintFunction } from "../canvas/constraints/interfaces";
import { PixelHitArea } from "../canvas/hit-area/PixelHitArea";
import { TweenInput } from "./interfaces";
/**
 * The base class for all shape components.
 */
export declare abstract class NgvasBaseComponent<S extends BaseStyle> {
    private Clazz;
    private _shape;
    private _delayedSetters;
    name: string;
    active: boolean;
    visible: boolean;
    x: number;
    y: number;
    origin: [number, number] | "center";
    width: number;
    height: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    skewX: number;
    skewY: number;
    scale: TweenInput<S, [number, number]>;
    size: TweenInput<S, [number, number]>;
    skew: TweenInput<S, [number, number]>;
    rotate: TweenInput<S, number>;
    translate: TweenInput<S, [number, number]>;
    animate: ((shape: S) => boolean) | undefined;
    constrain: ConstraintFunction[] | undefined;
    hitArea: typeof PixelHitArea;
    opacity: number;
    compose: {
        alpha?: number;
        overlay?: ComposeOverlay;
    };
    fill: TweenInput<S, ColorStyle>;
    stroke: TweenInput<S, {
        width: number;
        style: ColorStyle;
        join?: LineJoin;
        cap?: LineCap;
        dashOffset?: number;
        miterLimit?: number;
    }>;
    shadow: TweenInput<S, {
        blur: number;
        color: string;
        offsetX: number;
        offsetY: number;
    }>;
    shapeOut: EventEmitter<S>;
    clickEvent: EventEmitter<MouseEvent>;
    dblclickEvent: EventEmitter<MouseEvent>;
    wheelEvent: EventEmitter<WheelEvent>;
    mouseenterEvent: EventEmitter<MouseEvent>;
    mouseleaveEvent: EventEmitter<MouseEvent>;
    /**
     * Base constructor for the base component.
     */
    protected constructor(Clazz: BaseStyleConstructor<S>);
    getShape(): S | undefined;
    initShape(origCanvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): S;
    protected execOrDelay(f: (s: S) => void): void;
}
