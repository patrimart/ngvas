import { CircleShape } from "../canvas/shapes/CircleShape";
import { TweenFunc } from "../canvas/tweens/interfaces";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasCircleComponent extends NgvasBaseComponent<CircleShape> {
    constructor();
    radius: number;
    radier: [number, number | undefined, TweenFunc | undefined];
}
