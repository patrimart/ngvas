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
const ImageShape_1 = require("../canvas/shapes/ImageShape");
const base_component_1 = require("./base.component");
let NgvasImageComponent = NgvasImageComponent_1 = class NgvasImageComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(ImageShape_1.ImageShape);
    }
    set src(i) { this.execOrDelay((s) => s.withImage(i)); }
    ;
};
__decorate([
    core_1.Input("src"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgvasImageComponent.prototype, "src", null);
NgvasImageComponent = NgvasImageComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-image",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasImageComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasImageComponent);
exports.NgvasImageComponent = NgvasImageComponent;
var NgvasImageComponent_1;
//# sourceMappingURL=ngvas-image.component.js.map