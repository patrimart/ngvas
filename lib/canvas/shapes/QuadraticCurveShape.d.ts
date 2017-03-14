import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType, QuadraticCurve } from "./interfaces";
/**
 * Draws a stroked line.
 */
export declare class QuadraticCurveShape extends BaseStyle {
    private _curves;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    readonly numCurves: number;
    addCurve(curve: QuadraticCurve): this;
    clear(): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
