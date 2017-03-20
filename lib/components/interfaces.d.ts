import { TweenFunc } from "../canvas/tweens/interfaces";
import { BaseStyle } from "../canvas/styles/BaseStyle";
export declare type TweenInput<S extends BaseStyle, T> = T | [T, number, TweenFunc | undefined, ((shape: S) => void) | undefined];
