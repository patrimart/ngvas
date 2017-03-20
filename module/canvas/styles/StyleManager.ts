
import {
    ComposeOverlay, ColorStyle, LineJoin, LineCap, TextAlign, TextBaseline,
    IStyleCache, IComposeStyle, IFillStyle, IShadowStyle, IStrokeStyle, ITextStyle
} from "./interfaces";


export class StyleManager implements IStyleCache, IComposeStyle, IFillStyle, IShadowStyle, IStrokeStyle, ITextStyle {

    private ctxValues: any = {};


    constructor (
        private ctx: CanvasRenderingContext2D,
    ) {}

    public get hasFill (): boolean {
        return !! this.ctxValues.fillStyle;
    }

    public get hasStroke (): boolean {
        return !! this.ctxValues.lineWidth;
    }

    public get lineWidth (): number {
        return this.ctxValues.lineWidth;
    }

    public set opacity (alpha: number) {
        this.ctxValues.globalAlpha = alpha;
    }

    public get opacity () {
        return this.ctxValues.globalAlpha;
    }

    public compose(alpha?: number, overlay?: ComposeOverlay): this {
        this.ctxValues.globalAlpha = undefinedOr(alpha, this.ctxValues.globalAlpha);
        this.ctxValues.globalCompositeOperation = undefinedOr(overlay, this.ctxValues.globalCompositeOperation);
        return this;
    }

    public withFill (style?: ColorStyle): this {
        this.ctxValues.fillStyle = undefinedOr(style, this.ctxValues.fillStyle);
        return this;
    }

    public withStroke (width?: number, style?: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number): this {
        this.ctxValues.lineCap = undefinedOr(cap, this.ctxValues.lineCap);
        this.ctxValues.lineDashOffset = undefinedOr(dashOffset, this.ctxValues.lineDashOffset);
        this.ctxValues.lineJoin = undefinedOr(join, this.ctxValues.lineJoin);
        this.ctxValues.lineWidth = undefinedOr(width, this.ctxValues.lineWidth);
        this.ctxValues.strokeStyle = undefinedOr(style, this.ctxValues.strokeStyle);
        this.ctxValues.miterLimit = undefinedOr(miterLimit, this.ctxValues.miterLimit);
        return this;
    }

    public withShadow (blur?: number, color?: string, offsetX?: number, offsetY?: number): this {
        this.ctxValues.shadowBlur = undefinedOr(blur, this.ctxValues.shadowBlur);
        this.ctxValues.shadowColor = undefinedOr(color, this.ctxValues.shadowColor);
        this.ctxValues.shadowOffsetX = undefinedOr(offsetX, this.ctxValues.shadowOffsetX);
        this.ctxValues.shadowOffsetY = undefinedOr(offsetY, this.ctxValues.shadowOffsetY);
        return this;
    }

    public withText (): never {
        throw new Error("This method is not supported in StyleManager.");
    }

    public textStyle (font?: string, align?: TextAlign, baseline?: TextBaseline): this {
        this.ctxValues.font = undefinedOr(font, this.ctxValues.font);
        this.ctxValues.textAlign = undefinedOr(align, this.ctxValues.textAlign);
        this.ctxValues.textBaseline = undefinedOr(baseline, this.ctxValues.textBaseline);
        return this;
    }

    public begin (): void {
        this.ctx.save();
        for (const p in this.ctxValues) {
            if (this.ctxValues.hasOwnProperty(p)) {
                (this.ctx as any)[p] = this.ctxValues[p];
            }
        }
    }

    public end (): void {
        this.ctx.restore();
    }

    public clear (): void {
        this.ctxValues = {};
   }
}


function undefinedOr <T> (arg: T, ctxProp: T): T {
    return arg !== undefined ? arg : ctxProp;
}
