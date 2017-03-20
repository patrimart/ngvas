import { BaseStyle } from "../styles/BaseStyle";
import { Line, ShapeType } from "./interfaces";
/**
 * Draws a stroked line.
 */
export declare class LineShape extends BaseStyle {
    private _linePoints;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    width: number;
    height: number;
    addLine(line: Line): this;
    clear(): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
