
import {
    Component, Input,
} from "@angular/core";

import { QuadraticCurve }      from "../canvas/shapes/interfaces";
import { QuadraticCurveShape } from "../canvas/shapes/QuadraticCurveShape";
import { NgvasBaseComponent }  from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-quadratic",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasQuadraticCurveComponent } ],
})
export class NgvasQuadraticCurveComponent extends NgvasBaseComponent<QuadraticCurveShape> {


    public constructor() {
        super(QuadraticCurveShape);
    }

    @Input("curves")
    public set curves (cs: QuadraticCurve[]) { this.execOrDelay((s: QuadraticCurveShape) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); };
}
