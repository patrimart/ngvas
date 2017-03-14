
import {
    Component, Input,
} from "@angular/core";

import { CircleShape }        from "../canvas/shapes/CircleShape";
import { TweenFunc }          from "../canvas/tweens/interfaces";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-circle",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasCircleComponent } ],
})
export class NgvasCircleComponent extends NgvasBaseComponent<CircleShape> {


    public constructor() {
        super(CircleShape);
    }

    @Input("radius")
    public set radius (r: number) { this.execOrDelay((s: CircleShape) => s.radius = r); };

    @Input("radier")
    public set radier (v: [number, number | undefined, TweenFunc | undefined]) {
        this.execOrDelay((s: CircleShape) => s.withRadius(v[0], v[1], v[2]));
    }
}
