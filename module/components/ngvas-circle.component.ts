
import {
    Component, Input,
} from "@angular/core";

import { CircleShape }        from "../canvas/shapes/CircleShape";
import { NgvasBaseComponent } from "./base.component";
import { TweenInput }         from "./interfaces";


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
    public set radius (v: TweenInput<CircleShape, number>) {
        if (Array.isArray(v)) {
            this.execOrDelay((s: CircleShape) => s.withRadius(v[0], v[1], v[2], v[3]));
        } else {
            this.execOrDelay((s: CircleShape) => s.withRadius(v));
        }
    }
}
