
import {
    Component, Input,
} from "@angular/core";

import { TextShape }               from "../canvas/shapes/TextShape";
import { NgvasBaseComponent }      from "./base.component";
import { TextAlign, TextBaseline } from "../canvas/styles/interfaces";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas-text",
    template: "",
    providers: [ { provide: NgvasBaseComponent, useExisting: NgvasTextComponent } ],
})
export class NgvasTextComponent extends NgvasBaseComponent<TextShape> {


    public constructor() {
        super(TextShape);
    }

    @Input("text")
    public set text (t: string) { this.execOrDelay((s: TextShape) => s.text = t); };

    @Input("textStyle")
    public set textStyle (t: { font?: string, align?: TextAlign, baseline?: TextBaseline }) {
        this.execOrDelay((s: TextShape) => s.textStyle(t.font, t.align, t.baseline));
    };

}
