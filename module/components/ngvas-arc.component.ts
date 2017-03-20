
import {
    Component, Input,
} from "@angular/core";

import { ArcShape }           from "../canvas/shapes/ArcShape";
import { NgvasBaseComponent } from "./base.component";
import { TweenInput }         from "./interfaces";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-arc",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasArcComponent } ],
})
export class NgvasArcComponent extends NgvasBaseComponent<ArcShape> {


    public constructor() {
        super(ArcShape);
    }

    @Input("connectToCenter")
    public set connectToCenter (c: boolean) {
        this.execOrDelay((s: ArcShape) => s.connectToCenter(c));
    }

    @Input("radius")
    public set radius (v: TweenInput<ArcShape, number>) {
        if (Array.isArray(v)) {
            this.execOrDelay((s: ArcShape) => s.withRadius(v[0], v[1], v[2], v[3]));
        } else {
            this.execOrDelay((s: ArcShape) => s.withRadius(v));
        }
    }

    @Input("angle")
    public set angle (v: TweenInput<ArcShape, number>) {
        if (Array.isArray(v)) {
            this.execOrDelay((s: ArcShape) => s.withAngle(v[0], v[1], v[2], v[3]));
        } else {
            this.execOrDelay((s: ArcShape) => s.withAngle(v));
        }
    }

}
