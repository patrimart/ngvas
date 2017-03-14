import { IHitArea } from "./interfaces";
import { ContextTransformer } from "../shapes/interfaces";
import { BaseShape } from "../shapes/BaseShape";
export declare class CircleHitArea implements IHitArea {
    private width;
    private height;
    private offset;
    constructor(width: number, height: number, offset?: number);
    isHit(x: number, y: number, globalCtx: ContextTransformer, target: BaseShape): boolean;
    destroy(): void;
}
