import { TweenFunc } from "./interfaces";
import { BaseShape } from "../shapes/BaseShape";
export declare class TweenManager {
    private _collection;
    tween(): void;
    clear(): void;
    addTween(shape: BaseShape, tween: TweenFunc, duration: number, toValues: number[], paramKeys: string[], callback?: (shape: BaseShape) => void): void;
}
