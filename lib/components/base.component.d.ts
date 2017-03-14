import { EventEmitter } from "@angular/core";
import { ComposeOverlay, ColorStyle, LineJoin, LineCap } from "../canvas/styles/interfaces";
import { TweenFunc } from "../canvas/tweens/interfaces";
import { BaseStyle, BaseStyleConstructor } from "../canvas/styles/BaseStyle";
import { ConstraintFunction } from "../canvas/constraints/interfaces";
import { PixelHitArea } from "../canvas/hit-area/PixelHitArea";
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
    xy: [number, number];
    origin: [number, number] | "center";
    width: number;
    height: number;
    rotation: number;
    scale: [number, number] | number;
    skew: [number, number];
    scaler: [[number, number | undefined], number | undefined, TweenFunc | undefined];
    sizer: [[number, number | undefined], number | undefined, TweenFunc | undefined];
    skewer: [[number, number | undefined], number | undefined, TweenFunc | undefined];
    rotater: [number, number | undefined, TweenFunc | undefined];
    mover: [[number, number | undefined], number | undefined, TweenFunc | undefined];
    animator: ((shape: S) => boolean) | undefined;
    constrainer: ConstraintFunction[] | undefined;
    hitArea: typeof PixelHitArea;
    opacity: number;
    compose: {
        alpha?: number;
        overlay?: ComposeOverlay;
    };
    fill: ColorStyle | undefined;
    stroke: {
        width?: number;
        style?: ColorStyle;
        join?: LineJoin;
        cap?: LineCap;
        dashOffset?: number;
        miterLimit?: number;
    };
    shadow: {
        blur?: number;
        color?: string;
        offsetX?: number;
        offsetY?: number;
    };
    clickEvent: EventEmitter<MouseEvent>;
    shapeOut: EventEmitter<S>;
    constructor(Clazz: BaseStyleConstructor<S>);
    getShape(): S | undefined;
    initShape(ctx: CanvasRenderingContext2D): S;
    protected execOrDelay(f: (s: S) => void): void;
}
