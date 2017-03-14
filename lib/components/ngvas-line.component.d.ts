import { Line } from "../canvas/shapes/interfaces";
import { LineShape } from "../canvas/shapes/LineShape";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasLineComponent extends NgvasBaseComponent<LineShape> {
    constructor();
    lines: Line[];
}
