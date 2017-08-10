"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ImageShape_1 = require("../canvas/shapes/ImageShape");
const base_component_1 = require("./base.component");
class NgvasImageComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(ImageShape_1.ImageShape);
    }
    set src(i) { this.execOrDelay((s) => s.withImage(i)); }
    ;
}
NgvasImageComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-image",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasImageComponent }],
            },] },
];
/** @nocollapse */
NgvasImageComponent.ctorParameters = () => [];
NgvasImageComponent.propDecorators = {
    'src': [{ type: core_1.Input, args: ["src",] },],
};
exports.NgvasImageComponent = NgvasImageComponent;
//# sourceMappingURL=ngvas-image.component.js.map