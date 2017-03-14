
import {
    Component, Input,
} from "@angular/core";

import { BezierCurve }        from "../canvas/shapes/interfaces";
import { BezierCurveShape }   from "../canvas/shapes/BezierCurveShape";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-bezier",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasBezierCurveComponent } ],
})
export class NgvasBezierCurveComponent extends NgvasBaseComponent<BezierCurveShape> {


    public constructor() {
        super(BezierCurveShape);
    }

    @Input("curves")
    public set curves (cs: BezierCurve[]) { this.execOrDelay((s: BezierCurveShape) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); };

}
