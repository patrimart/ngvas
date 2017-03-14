
import {
    Component, Inject, ElementRef, AfterContentInit, OnDestroy,
    ContentChildren, QueryList, Input, Output, EventEmitter,
} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

import { Subscription } from "rxjs/Subscription";

import { CanvasGroup }        from "../canvas/CanvasGroup";
import { BaseShape }          from "../canvas/shapes/BaseShape";
import { BaseStyle }          from "../canvas/styles/BaseStyle";
import { NgvasBaseComponent } from "./base.component";


@Component({
    // moduleId: String(module.id),
    selector: "ngvas",
    template: "<ng-content></ng-content>",
    styles: [ ":not(canvas) { display: none; }" ],
})
export class NgvasComponent implements AfterContentInit, OnDestroy {

    @ContentChildren(NgvasBaseComponent)
    public contentChildren: QueryList<NgvasBaseComponent<BaseStyle>>;

    private _canvasGroup: CanvasGroup;
    private _width = 0;
    private _height = 0;
    private _isActive = true;
    private _shape = new EventEmitter<BaseShape>();

    private _contentSubscription: Subscription;

    public constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(ElementRef) private elRef: ElementRef,
    ) {}

    @Input("width")
    public set width (w: number) {
        this._width = +w;
    }

    @Input("height")
    public set height (h: number) {
        this._height = +h;
    }

    @Input("active")
    public set active (a: boolean) {
        this._isActive = a;
    }

    @Output("shape")
    public get shape () {
         return this._shape;
    }


    public getShape (): CanvasGroup {
        return this._canvasGroup;
    }

    /**
     * Fires once after ng-content is intitialized.
     */
    public ngAfterContentInit (): void {

        const canvas = this.document.createElement("canvas");
        canvas.width = this._width;
        canvas.height = this._height;
        this.elRef.nativeElement.appendChild(canvas);

        this._canvasGroup = new CanvasGroup(canvas, undefined, this._isActive);
        this.contentChildren.forEach(c => this._canvasGroup.addChild(c.initShape(this._canvasGroup.context)));

        this.shape.emit(this._canvasGroup);

        this._contentSubscription = this.contentChildren.changes
            .subscribe(c => {
                this._canvasGroup.removeAllChildren();
                c.forEach((c2: NgvasBaseComponent<BaseStyle>) => this._canvasGroup.addChild(c2.initShape(this._canvasGroup.context)));
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
