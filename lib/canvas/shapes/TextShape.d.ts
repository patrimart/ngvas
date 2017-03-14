import { ITextStyle, TextAlign, TextBaseline } from "../styles/interfaces";
import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType } from "./interfaces";
/**
 * Draws a filled and/or stroked line of text.
 */
export declare class TextShape extends BaseStyle implements ITextStyle {
    private _text;
    private _maxWidth;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    withText(text: string, maxWidth?: number): this;
    text: string;
    textStyle(font?: string, align?: TextAlign, baseline?: TextBaseline): this;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
