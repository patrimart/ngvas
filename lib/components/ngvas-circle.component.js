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
const CircleShape_1 = require("../canvas/shapes/CircleShape");
const base_component_1 = require("./base.component");
let NgvasCircleComponent = NgvasCircleComponent_1 = class NgvasCircleComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(CircleShape_1.CircleShape);
    }
    set radius(r) { this.execOrDelay((s) => s.radius = r); }
    ;
    set radier(v) {
        this.execOrDelay((s) => s.withRadius(v[0], v[1], v[2]));
    }
};
__decorate([
    core_1.Input("radius"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], NgvasCircleComponent.prototype, "radius", null);
__decorate([
    core_1.Input("radier"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasCircleComponent.prototype, "radier", null);
NgvasCircleComponent = NgvasCircleComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-circle",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasCircleComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasCircleComponent);
exports.NgvasCircleComponent = NgvasCircleComponent;
var NgvasCircleComponent_1;
//# sourceMappingURL=ngvas-circle.component.js.map