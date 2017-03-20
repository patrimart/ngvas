
import { TweenFunc } from "../canvas/tweens/interfaces";
import { BaseStyle } from "../canvas/styles/BaseStyle";


export type TweenInput <S extends BaseStyle, T> = T | [ T, number, TweenFunc | undefined, ((shape: S) => void) | undefined ];
