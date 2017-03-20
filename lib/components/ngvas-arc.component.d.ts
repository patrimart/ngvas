import { ArcShape } from "../canvas/shapes/ArcShape";
import { NgvasBaseComponent } from "./base.component";
import { TweenInput } from "./interfaces";
export declare class NgvasArcComponent extends NgvasBaseComponent<ArcShape> {
    constructor();
    connectToCenter: boolean;
    radius: TweenInput<ArcShape, number>;
    angle: TweenInput<ArcShape, number>;
}
