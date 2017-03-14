"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const BezierCurveShape_1 = require("../canvas/shapes/BezierCurveShape");
const base_component_1 = require("./base.component");
let NgvasBezierCurveComponent = NgvasBezierCurveComponent_1 = class NgvasBezierCurveComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(BezierCurveShape_1.BezierCurveShape);
    }
    set curves(cs) { this.execOrDelay((s) => { s.clear(); cs.forEach(c => s.addCurve(c)); }); }
    ;
};
__decorate([
    core_1.Input("curves"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasBezierCurveComponent.prototype, "curves", null);
NgvasBezierCurveComponent = NgvasBezierCurveComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-bezier",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasBezierCurveComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasBezierCurveComponent);
exports.NgvasBezierCurveComponent = NgvasBezierCurveComponent;
var NgvasBezierCurveComponent_1;
//# sourceMappingURL=ngvas-bezier.component.js.map