"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const PolyShape_1 = require("../canvas/shapes/PolyShape");
const base_component_1 = require("./base.component");
class NgvasPolygonComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(PolyShape_1.PolyShape);
    }
    set sides(ls) {
        this.execOrDelay((s) => {
            s.clear();
            for (const l of ls) {
                if (l.length === 2) {
                    s.addLine(l);
                }
                else if (l.length === 3) {
                    s.addQuadratic(l);
                }
                else if (l.length === 4) {
                    s.addBezier(l);
                }
            }
        });
    }
    ;
}
NgvasPolygonComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-polygon",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasPolygonComponent }],
            },] },
];
/** @nocollapse */
NgvasPolygonComponent.ctorParameters = () => [];
NgvasPolygonComponent.propDecorators = {
    'sides': [{ type: core_1.Input, args: ["sides",] },],
};
exports.NgvasPolygonComponent = NgvasPolygonComponent;
//# sourceMappingURL=ngvas-polygon.component.js.map