import { BezierCurve } from "../canvas/shapes/interfaces";
import { BezierCurveShape } from "../canvas/shapes/BezierCurveShape";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasBezierCurveComponent extends NgvasBaseComponent<BezierCurveShape> {
    constructor();
    curves: BezierCurve[];
}
