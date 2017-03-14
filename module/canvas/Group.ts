
import { IGroup }                        from "./interfaces";
import { ShapeType, ContextTransformer } from "./shapes/interfaces";
import { BaseShape }                     from "./shapes/BaseShape";
import { BaseStyle }                     from "./styles/BaseStyle";


export class Group extends BaseStyle implements IGroup {

    // Render children from high to 0 index.
    private _children: BaseShape[] = [];

    private __isVisible = true;
    private __isActive = true;

    public constructor (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        name: string,
    ) {
        super(canvas, ctx, name);
    }

    public get type () {
        return ShapeType.GROUP;
    }

    public get isActive () { return this.__isActive; }
    public set isActive (v: boolean) { this.__isActive = v; }

    public get isVisible () { return this.__isVisible; }
    public set isVisible (v: boolean) { this.__isVisible = v; }


    public withText (): never {
        throw new Error("This method is not supported in StyleManager.");
    }


    public numChildren (): number {
        return this._children.length;
    }

    public addChild (shape: BaseShape): this {
        this._children.push(shape);
        return this;
    }

    public removeChild (shape: BaseShape): this {
        this._children = this._children.filter(s => s === shape);
        return this;
    }

    public removeChildAt (index: number): BaseShape {
        const child = this._children[index];
        this._children = this._children.filter(s => s !== child);
        return child;
    }

    public removeAllChildren (): void {
        this._children = [];
    }


    public traceShape (ctx: CanvasRenderingContext2D) {
        this._children.filter(c => c.traceShape !== undefined).forEach(c => c.traceShape(ctx));
    }


    protected customDraw (ctxt: ContextTransformer): void {

        if (this.isActive || this.isVisible) {
            this._children.forEach(c => {
                // c.originX += this.originX + c.x;
                // c.originY += this.originY + c.y;
                c.draw(ctxt);
                // c.originX -= this.originX + c.x;
                // c.originY -= this.originY + c.y;
            });
        }
    }


    public isHit (x: number, y: number): boolean {

        if (! this.isVisible) {
            return false;
        }
        // Runs hitArea on every child.
        let isHit = false;
        for (const c of this._children) {
            if (c.isVisible && c.isHit(x, y)) {
                isHit = true;
            }
        }
        return isHit;
    }
}
