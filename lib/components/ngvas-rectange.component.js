"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const RectShape_1 = require("../canvas/shapes/RectShape");
const base_component_1 = require("./base.component");
class NgvasRectangleComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(RectShape_1.RectShape);
    }
}
NgvasRectangleComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-rectangle",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasRectangleComponent }],
            },] },
];
/** @nocollapse */
NgvasRectangleComponent.ctorParameters = () => [];
exports.NgvasRectangleComponent = NgvasRectangleComponent;
//# sourceMappingURL=ngvas-rectange.component.js.map