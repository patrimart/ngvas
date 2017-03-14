import { IGroup } from "./interfaces";
import { ShapeType, ContextTransformer } from "./shapes/interfaces";
import { BaseShape } from "./shapes/BaseShape";
import { BaseStyle } from "./styles/BaseStyle";
export declare class Group extends BaseStyle implements IGroup {
    private _children;
    private __isVisible;
    private __isActive;
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, name: string);
    readonly type: ShapeType;
    isActive: boolean;
    isVisible: boolean;
    withText(): never;
    numChildren(): number;
    addChild(shape: BaseShape): this;
    removeChild(shape: BaseShape): this;
    removeChildAt(index: number): BaseShape;
    removeAllChildren(): void;
    traceShape(ctx: CanvasRenderingContext2D): void;
    protected customDraw(ctxt: ContextTransformer): void;
    isHit(x: number, y: number): boolean;
}
