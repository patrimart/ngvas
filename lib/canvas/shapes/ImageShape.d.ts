import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType } from "./interfaces";
/**
 * Draws a filled and/or stroked line of text.
 */
export declare class ImageShape extends BaseStyle {
    private _image;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name?: string);
    readonly type: ShapeType;
    withImage(img: string, callback?: (shape: ImageShape) => void): this;
    getImage(): HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(): void;
}
