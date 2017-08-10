"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const TextShape_1 = require("../canvas/shapes/TextShape");
const base_component_1 = require("./base.component");
class NgvasTextComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(TextShape_1.TextShape);
    }
    set text(t) { this.execOrDelay((s) => s.text = t); }
    ;
    set textStyle(t) {
        this.execOrDelay((s) => s.textStyle(t.font, t.align, t.baseline));
    }
    ;
}
NgvasTextComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-text",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasTextComponent }],
            },] },
];
/** @nocollapse */
NgvasTextComponent.ctorParameters = () => [];
NgvasTextComponent.propDecorators = {
    'text': [{ type: core_1.Input, args: ["text",] },],
    'textStyle': [{ type: core_1.Input, args: ["textStyle",] },],
};
exports.NgvasTextComponent = NgvasTextComponent;
//# sourceMappingURL=ngvas-text.component.js.map