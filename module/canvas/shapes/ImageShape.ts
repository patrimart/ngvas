
import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType } from "./interfaces";


/**
 * Draws a filled and/or stroked line of text.
 */
export class ImageShape extends BaseStyle {

    private _image: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "Image_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.IMAGE; }



    public withImage (img: string, callback?: (shape: ImageShape) => void): this {
        this._image = new Image();
        this._image.src = img;
        if (callback !== undefined) {
            this._image.addEventListener("load", () => callback(this));
        }
        return this;
    }

    public getImage (): HTMLImageElement | HTMLVideoElement | HTMLCanvasElement {
        return this._image;
    }



    public traceShape (ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
    }

    protected customDraw (): void {
        this.ctx.drawImage(this._image, 0 - this.originX, 0 - this.originY, this.width, this.height);
    }
}
