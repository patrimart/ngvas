import { ContextTransformer } from "./shapes/interfaces";
import { Group } from "./Group";
export declare class CanvasGroup extends Group {
    private _reqAniFrameId;
    constructor(canvas: HTMLCanvasElement, offscreenCanvas?: HTMLCanvasElement, isActive?: boolean);
    redraw(): void;
    readonly context: CanvasRenderingContext2D;
    isActive: boolean;
    draw(ctxt: ContextTransformer): void;
    isHit(): boolean;
}
