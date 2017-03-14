
import {
    ITextStyle, TextAlign, TextBaseline,
} from "../styles/interfaces";

import { BaseStyle } from "../styles/BaseStyle";
import { ShapeType } from "./interfaces";

/**
 * Draws a filled and/or stroked line of text.
 */
export class TextShape extends BaseStyle implements ITextStyle {

    private _text = "";
    private _maxWidth: number | undefined;

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name = "Text_" + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    ) {
        super (canvas, ctx, name);
    }

    public get type () { return ShapeType.TEXT; }


    public withText (text: string, maxWidth?: number): this {
        this._maxWidth = maxWidth;
        this.text = text;
        return this;
    }

    public set text (text: string) {
        this._text = text;
        this.styleManager.begin();
        this.width = this._maxWidth || this.ctx.measureText(this._text).width;
        this.styleManager.end();
    }

    public get text () {
        return this._text;
    }

    public textStyle (font?: string, align?: TextAlign, baseline?: TextBaseline): this {
        this.styleManager.textStyle(font, align, baseline);
        return this;
    }



    public traceShape (ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(0 - this.originX, 0 - this.originY, this.width, this.height);
    }

    protected customDraw (): void {
        if (this.styleManager.hasFill) {
            this.ctx.fillText(this.text, 0 - this.originX, 0 - this.originY, this._maxWidth);
        }
        if (this.styleManager.hasStroke) {
            this.ctx.strokeText(this.text, 0 - this.originX, 0 - this.originY, this._maxWidth);
        }
    }
}
