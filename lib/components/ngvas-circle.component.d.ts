import { CircleShape } from "../canvas/shapes/CircleShape";
import { NgvasBaseComponent } from "./base.component";
import { TweenInput } from "./interfaces";
export declare class NgvasCircleComponent extends NgvasBaseComponent<CircleShape> {
    constructor();
    radius: TweenInput<CircleShape, number>;
}
