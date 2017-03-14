
import {
    Component, Input,
} from "@angular/core";

import { Line, BezierCurve, QuadraticCurve } from "../canvas/shapes/interfaces";
import { PolyShape }                         from "../canvas/shapes/PolyShape";
import { NgvasBaseComponent }                from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-polygon",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasPolygonComponent } ],
})
export class NgvasPolygonComponent extends NgvasBaseComponent<PolyShape> {


    public constructor() {
        super(PolyShape);
    }

    @Input("sides")
    public set sides (ls: Array<Line | BezierCurve | QuadraticCurve>) {
        this.execOrDelay((s: PolyShape) => {
            s.clear();
            for (const l of ls) {
                if (l.length === 2) {
                    s.addLine(l);
                } else if (l.length === 3) {
                    s.addQuadratic(l as any);
                } else if (l.length === 4) {
                    s.addBezier(l as any);
                }
            }
        });
    };

}
