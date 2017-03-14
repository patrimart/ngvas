import { IHitArea } from "./interfaces";
import { ContextTransformer } from "../shapes/interfaces";
import { ITraceable } from "../styles/interfaces";
/**
 * Pixel-accurate Hit Area class.
 */
export declare class PixelHitArea implements IHitArea {
    private canvas;
    private ctx;
    /**
     * Creates an instance of class.
     */
    constructor(width: number, height: number);
    /**
     * Calculates if the x, y point is within the hit area.
     */
    isHit(x: number, y: number, globalCtx: ContextTransformer, target: ITraceable): boolean;
    /**
     * Cleans up the instance.
     */
    destroy(): void;
}
