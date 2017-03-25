
import {
    Component, Input,
} from "@angular/core";

import { ImageShape } from "../canvas/shapes/ImageShape";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-image",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasImageComponent } ],
})
export class NgvasImageComponent extends NgvasBaseComponent<ImageShape> {


    public constructor() {
        super(ImageShape);
    }

    @Input("src")
    public set src (i: string) { this.execOrDelay((s: ImageShape) => s.withImage(i)); };

}
