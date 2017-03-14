import { TextShape } from "../canvas/shapes/TextShape";
import { NgvasBaseComponent } from "./base.component";
import { TextAlign, TextBaseline } from "../canvas/styles/interfaces";
export declare class NgvasTextComponent extends NgvasBaseComponent<TextShape> {
    constructor();
    text: string;
    textStyle: {
        font?: string;
        align?: TextAlign;
        baseline?: TextBaseline;
    };
}
