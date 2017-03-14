
import {
    Component, Input,
} from "@angular/core";

import { Line }               from "../canvas/shapes/interfaces";
import { LineShape }          from "../canvas/shapes/LineShape";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-line",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasLineComponent } ],
})
export class NgvasLineComponent extends NgvasBaseComponent<LineShape> {


    public constructor() {
        super(LineShape);
    }

    @Input("lines")
    public set lines (ls: Line[]) { this.execOrDelay((s: LineShape) => { s.clear(); ls.forEach(l => s.addLine(l)); }); };

}
