
import {
    Component, Input,
} from "@angular/core";

import { ArcShape }           from "../canvas/shapes/ArcShape";
import { TweenFunc }          from "../canvas/tweens/interfaces";
import { NgvasBaseComponent } from "./base.component";


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


    @Input("radius")
    public set radius (r: number) { this.execOrDelay((s: ArcShape) => s.radius = r); };

    @Input("angle")
    public set angle (deg: number) { this.execOrDelay((s: ArcShape) => s.angle = deg); };


    @Input("radier")
    public set radier (v: [number, number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: ArcShape) => s.withRadius(v[0], v[1], v[2]));
    }

    @Input("angler")
    public set angler (v: [number, number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: ArcShape) => s.withAngle(v[0], v[1], v[2]));
    }

}
