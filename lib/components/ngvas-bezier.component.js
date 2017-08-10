"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const BezierCurveShape_1 = require("../canvas/shapes/BezierCurveShape");
const base_component_1 = require("./base.component");
class NgvasBezierCurveComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(BezierCurveShape_1.BezierCurveShape);
    }
    set curves(cs) { this.execOrDelay((s) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); }
    ;
}
NgvasBezierCurveComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-bezier",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasBezierCurveComponent }],
            },] },
];
/** @nocollapse */
NgvasBezierCurveComponent.ctorParameters = () => [];
NgvasBezierCurveComponent.propDecorators = {
    'curves': [{ type: core_1.Input, args: ["curves",] },],
};
exports.NgvasBezierCurveComponent = NgvasBezierCurveComponent;
//# sourceMappingURL=ngvas-bezier.component.js.map