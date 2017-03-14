import { Line, BezierCurve, QuadraticCurve } from "../canvas/shapes/interfaces";
import { PolyShape } from "../canvas/shapes/PolyShape";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasPolygonComponent extends NgvasBaseComponent<PolyShape> {
    constructor();
    sides: Array<Line | BezierCurve | QuadraticCurve>;
}
