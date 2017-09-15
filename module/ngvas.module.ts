
import { NgModule }      from "@angular/core";
import { CommonModule }  from "@angular/common";

import { NgvasComponent }               from "./components/ngvas.component";
import { NgvasArcComponent }            from "./components/ngvas-arc.component";
import { NgvasBezierCurveComponent }    from "./components/ngvas-bezier.component";
import { NgvasCircleComponent }         from "./components/ngvas-circle.component";
import { NgvasImageComponent }          from "./components/ngvas-image.component";
import { NgvasLineComponent }           from "./components/ngvas-line.component";
import { NgvasPolygonComponent }        from "./components/ngvas-polygon.component";
import { NgvasQuadraticCurveComponent } from "./components/ngvas-quadratic.component";
import { NgvasRectangleComponent }      from "./components/ngvas-rectange.component";
import { NgvasTextComponent }           from "./components/ngvas-text.component";


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        NgvasComponent,
        NgvasArcComponent,
        NgvasBezierCurveComponent,
        NgvasCircleComponent,
        NgvasImageComponent,
        NgvasLineComponent,
        NgvasPolygonComponent,
        NgvasQuadraticCurveComponent,
        NgvasRectangleComponent,
        NgvasTextComponent,
    ],
    exports: [
        NgvasComponent,
        NgvasArcComponent,
        NgvasBezierCurveComponent,
        NgvasCircleComponent,
        NgvasImageComponent,
        NgvasLineComponent,
        NgvasPolygonComponent,
        NgvasQuadraticCurveComponent,
        NgvasRectangleComponent,
        NgvasTextComponent,
    ],
})
export class NgvasModule { }
