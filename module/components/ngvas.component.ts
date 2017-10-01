
import {
    Component, Inject, ElementRef, AfterContentInit, OnDestroy,
    ContentChildren, QueryList, Input, Output, EventEmitter, ViewChild, Renderer2,
} from "@angular/core";

import { Subscription } from "rxjs/Subscription";

import { CanvasGroup }        from "../canvas/CanvasGroup";
import { BaseStyle }          from "../canvas/styles/BaseStyle";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas",
    template: "<ng-content></ng-content><canvas #ngvasCanvas></canvas>",
    styles: [ ":not(canvas) { display: none; }" ],
})
export class NgvasComponent implements AfterContentInit, OnDestroy {

    @ViewChild("ngvasCanvas")
    public canvasRef: ElementRef;

    @ContentChildren(NgvasBaseComponent)
    public contentChildren: QueryList<NgvasBaseComponent<BaseStyle>>;

    private _canvasGroup: CanvasGroup;
    private _width = 0;
    private _height = 0;
    private _isActive = true;

    private _contentSubscription: Subscription;


    @Output("ready")
    public ready = new EventEmitter<NgvasComponent>();


    public constructor(
        @Inject(Renderer2) private renderer: Renderer2,
    ) {}


    @Input("width")
    public set width (w: number) {
        this._width = +w;
        if (this._canvasGroup) { this._canvasGroup.context.canvas.width = +w; }
    }

    @Input("height")
    public set height (h: number) {
        this._height = +h;
        if (this._canvasGroup) { this._canvasGroup.context.canvas.height = +h; }
    }

    @Input("active")
    public set active (a: boolean) {
        this._isActive = a;
    }


    public getShape (): CanvasGroup {
        return this._canvasGroup;
    }

    /**
     * Fires once after ng-content is intitialized.
     */
    public ngAfterContentInit (): void {

        const canvas = this.canvasRef.nativeElement;
        this.renderer.setAttribute(canvas, "width", String(this._width));
        this.renderer.setAttribute(canvas, "height", String(this._height));

        this._canvasGroup = new CanvasGroup(canvas, undefined, this._isActive);
        this.contentChildren.forEach(c => this._canvasGroup.addChild(c.initShape(canvas, this._canvasGroup.context)));

        this.ready.emit(this);

        this._contentSubscription = this.contentChildren.changes
            .subscribe(c => {
                this._canvasGroup.removeAllChildren();
                c.forEach((c2: NgvasBaseComponent<BaseStyle>) => this._canvasGroup.addChild(c2.initShape(canvas, this._canvasGroup.context)));
            });
    }

    /**
     * Fires when the component is destroyed.
     */
    public ngOnDestroy () {

        this._canvasGroup.isActive = false;
        this._canvasGroup.removeAllChildren();

        if (this._contentSubscription !== undefined) {
            this._contentSubscription.unsubscribe();
        }
    }
}
