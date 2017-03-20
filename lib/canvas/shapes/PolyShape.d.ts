import { Line, BezierCurve, QuadraticCurve, ShapeType } from "./interfaces";
import { BaseStyle } from "../styles/BaseStyle";
/**
 * Draws a filled and/or stroked polygon.
 */
export declare class PolyShape extends BaseStyle {
    private _sidesCollection;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    readonly width: number;
    readonly height: number;
    addLine(line: Line): this;
    addBezier(curve: BezierCurve): this;
    addQuadratic(curve: QuadraticCurve): this;
    clear(): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
