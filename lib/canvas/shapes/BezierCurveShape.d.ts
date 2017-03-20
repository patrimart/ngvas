import { BaseStyle } from "../styles/BaseStyle";
import { BezierCurve, ShapeType } from "./interfaces";
/**
 * Draws a stroked line.
 */
export declare class BezierCurveShape extends BaseStyle {
    private _curves;
    private _boundary;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    readonly width: number;
    readonly height: number;
    readonly numCurves: number;
    addCurve(curve: BezierCurve): this;
    clear(): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
