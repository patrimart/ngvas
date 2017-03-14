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
const TextShape_1 = require("../canvas/shapes/TextShape");
const base_component_1 = require("./base.component");
let NgvasTextComponent = NgvasTextComponent_1 = class NgvasTextComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(TextShape_1.TextShape);
    }
    set text(t) { this.execOrDelay((s) => s.text = t); }
    ;
    set textStyle(t) {
        this.execOrDelay((s) => s.textStyle(t.font, t.align, t.baseline));
    }
    ;
};
__decorate([
    core_1.Input("text"),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], NgvasTextComponent.prototype, "text", null);
__decorate([
    core_1.Input("textStyle"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NgvasTextComponent.prototype, "textStyle", null);
NgvasTextComponent = NgvasTextComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-text",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasTextComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasTextComponent);
exports.NgvasTextComponent = NgvasTextComponent;
var NgvasTextComponent_1;
//# sourceMappingURL=ngvas-text.component.js.map