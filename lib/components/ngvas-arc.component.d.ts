import { ArcShape } from "../canvas/shapes/ArcShape";
import { TweenFunc } from "../canvas/tweens/interfaces";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasArcComponent extends NgvasBaseComponent<ArcShape> {
    constructor();
    radius: number;
    angle: number;
    radier: [number, number | undefined, TweenFunc | undefined];
    angler: [number, number | undefined, TweenFunc | undefined];
}
