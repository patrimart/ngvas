"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ArcShape_1 = require("../canvas/shapes/ArcShape");
const base_component_1 = require("./base.component");
class NgvasArcComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(ArcShape_1.ArcShape);
    }
    set connectToCenter(c) {
        this.execOrDelay((s) => s.connectToCenter(c));
    }
    set radius(v) {
        if (Array.isArray(v)) {
            this.execOrDelay((s) => s.withRadius(v[0], v[1], v[2], v[3]));
        }
        else {
            this.execOrDelay((s) => s.withRadius(v));
        }
    }
    set angle(v) {
        if (Array.isArray(v)) {
            this.execOrDelay((s) => s.withAngle(v[0], v[1], v[2], v[3]));
        }
        else {
            this.execOrDelay((s) => s.withAngle(v));
        }
    }
}
NgvasArcComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-arc",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasArcComponent }],
            },] },
];
/** @nocollapse */
NgvasArcComponent.ctorParameters = () => [];
NgvasArcComponent.propDecorators = {
    'connectToCenter': [{ type: core_1.Input, args: ["connectToCenter",] },],
    'radius': [{ type: core_1.Input, args: ["radius",] },],
    'angle': [{ type: core_1.Input, args: ["angle",] },],
};
exports.NgvasArcComponent = NgvasArcComponent;
//# sourceMappingURL=ngvas-arc.component.js.map