"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const QuadraticCurveShape_1 = require("../canvas/shapes/QuadraticCurveShape");
const base_component_1 = require("./base.component");
class NgvasQuadraticCurveComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(QuadraticCurveShape_1.QuadraticCurveShape);
    }
    set curves(cs) { this.execOrDelay((s) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); }
    ;
}
NgvasQuadraticCurveComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-quadratic",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasQuadraticCurveComponent }],
            },] },
];
/** @nocollapse */
NgvasQuadraticCurveComponent.ctorParameters = () => [];
NgvasQuadraticCurveComponent.propDecorators = {
    'curves': [{ type: core_1.Input, args: ["curves",] },],
};
exports.NgvasQuadraticCurveComponent = NgvasQuadraticCurveComponent;
//# sourceMappingURL=ngvas-quadratic.component.js.map