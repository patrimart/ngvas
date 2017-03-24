
import {
    Component,
} from "@angular/core";

import { RectShape }          from "../canvas/shapes/RectShape";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-rectangle",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasRectangleComponent } ],
})
export class NgvasRectangleComponent extends NgvasBaseComponent<RectShape> {

    public constructor() {
        super(RectShape);
    }
}
