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
const PolyShape_1 = require("../canvas/shapes/PolyShape");
const base_component_1 = require("./base.component");
let NgvasPolygonComponent = NgvasPolygonComponent_1 = class NgvasPolygonComponent extends base_component_1.NgvasBaseComponent {
    constructor() {
        super(PolyShape_1.PolyShape);
    }
    set sides(ls) {
        this.execOrDelay((s) => {
            s.clear();
            for (const l of ls) {
                if (l.length === 2) {
                    s.addLine(l);
                }
                else if (l.length === 3) {
                    s.addQuadratic(l);
                }
                else if (l.length === 4) {
                    s.addBezier(l);
                }
            }
        });
    }
    ;
};
__decorate([
    core_1.Input("sides"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], NgvasPolygonComponent.prototype, "sides", null);
NgvasPolygonComponent = NgvasPolygonComponent_1 = __decorate([
    core_1.Component({
        // moduleId: String(module.id),
        selector: "ngvas-polygon",
        template: "",
        providers: [{ provide: base_component_1.NgvasBaseComponent, useExisting: NgvasPolygonComponent_1 }],
    }),
    __metadata("design:paramtypes", [])
], NgvasPolygonComponent);
exports.NgvasPolygonComponent = NgvasPolygonComponent;
var NgvasPolygonComponent_1;
//# sourceMappingURL=ngvas-polygon.component.js.map