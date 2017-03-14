import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType } from "./interfaces";
/**
 * Draws a filled and/or stroked rectangle.
 */
export declare class RectShape extends BaseStyle {
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
