"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const CanvasGroup_1 = require("../canvas/CanvasGroup");
const base_component_1 = require("./base.component");
class NgvasComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this._width = 0;
        this._height = 0;
        this._isActive = true;
        this.ready = new core_1.EventEmitter();
    }
    set width(w) {
        this._width = +w;
    }
    set height(h) {
        this._height = +h;
    }
    set active(a) {
        this._isActive = a;
    }
    getShape() {
        return this._canvasGroup;
    }
    /**
     * Fires once after ng-content is intitialized.
     */
    ngAfterContentInit() {
        const canvas = this.canvasRef.nativeElement;
        this.renderer.setAttribute(canvas, "width", String(this._width));
        this.renderer.setAttribute(canvas, "height", String(this._height));
        this._canvasGroup = new CanvasGroup_1.CanvasGroup(canvas, undefined, this._isActive);
        this.contentChildren.forEach(c => this._canvasGroup.addChild(c.initShape(canvas, this._canvasGroup.context)));
        this.ready.emit(this);
        this._contentSubscription = this.contentChildren.changes
            .subscribe(c => {
            this._canvasGroup.removeAllChildren();
            c.forEach((c2) => this._canvasGroup.addChild(c2.initShape(canvas, this._canvasGroup.context)));
        });
    }
    /**
     * Fires when the component is destroyed.
     */
    ngOnDestroy() {
        this._canvasGroup.isActive = false;
        this._canvasGroup.removeAllChildren();
        if (this._contentSubscription !== undefined) {
            this._contentSubscription.unsubscribe();
        }
    }
}
NgvasComponent.decorators = [
    { type: core_1.Component, args: [{
                // moduleId: String(module.id),
                selector: "ngvas",
                template: "<ng-content></ng-content><canvas #ngvasCanvas></canvas>",
                styles: [":not(canvas) { display: none; }"],
            },] },
];
/** @nocollapse */
NgvasComponent.ctorParameters = () => [
    { type: core_1.Renderer2, decorators: [{ type: core_1.Inject, args: [core_1.Renderer2,] },] },
];
NgvasComponent.propDecorators = {
    'canvasRef': [{ type: core_1.ViewChild, args: ["ngvasCanvas",] },],
    'contentChildren': [{ type: core_1.ContentChildren, args: [base_component_1.NgvasBaseComponent,] },],
    'ready': [{ type: core_1.Output, args: ["ready",] },],
    'width': [{ type: core_1.Input, args: ["width",] },],
    'height': [{ type: core_1.Input, args: ["height",] },],
    'active': [{ type: core_1.Input, args: ["active",] },],
};
exports.NgvasComponent = NgvasComponent;
//# sourceMappingURL=ngvas.component.js.map