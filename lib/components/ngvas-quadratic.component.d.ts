import { QuadraticCurve } from "../canvas/shapes/interfaces";
import { QuadraticCurveShape } from "../canvas/shapes/QuadraticCurveShape";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasQuadraticCurveComponent extends NgvasBaseComponent<QuadraticCurveShape> {
    constructor();
    curves: QuadraticCurve[];
}
