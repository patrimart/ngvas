import { TweenFunc } from "./interfaces";
import { BaseShape } from "../shapes/BaseShape";
export declare class TweenManager {
    private _collection;
    /**
     * Execute tweens.
     */
    tween(): void;
    clear(): void;
    addTween(target: any, tween: TweenFunc | undefined, duration: number, toValues: number[], paramKeys: string[], callback?: (target: BaseShape) => void, priority?: number, preFunc?: Function, postFunc?: (vals: number[]) => void): void;
}
