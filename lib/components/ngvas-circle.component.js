"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const CircleShape_1 = require("../canvas/shapes/CircleShape");
const base_component_1 = require("./base.component");
class NgvasCircleComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(CircleShape_1.CircleShape);
    }
    set radius(v) {
        if (Array.isArray(v)) {
            this.execOrDelay((s) => s.withRadius(v[0], v[1], v[2], v[3]));
        }
        else {
            this.execOrDelay((s) => s.withRadius(v));
        }
    }
}
NgvasCircleComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-circle",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasCircleComponent }],
            },] },
];
/** @nocollapse */
NgvasCircleComponent.ctorParameters = () => [];
NgvasCircleComponent.propDecorators = {
    'radius': [{ type: core_1.Input, args: ["radius",] },],
};
exports.NgvasCircleComponent = NgvasCircleComponent;
//# sourceMappingURL=ngvas-circle.component.js.map