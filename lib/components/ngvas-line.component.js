"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const LineShape_1 = require("../canvas/shapes/LineShape");
const base_component_1 = require("./base.component");
class NgvasLineComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(LineShape_1.LineShape);
    }
    set lines(ls) { this.execOrDelay((s) => { s.clear(); ls.forEach(l => s.addLine(l)); }); }
    ;
}
NgvasLineComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas-line",
                template: "",
                providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasLineComponent }],
            },] },
];
/** @nocollapse */
NgvasLineComponent.ctorParameters = () => [];
NgvasLineComponent.propDecorators = {
    'lines': [{ type: core_1.Input, args: ["lines",] },],
};
exports.NgvasLineComponent = NgvasLineComponent;
//# sourceMappingURL=ngvas-line.component.js.map