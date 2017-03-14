import { ElementRef, AfterContentInit, OnDestroy, QueryList, EventEmitter } from "@angular/core";
import { CanvasGroup } from "../canvas/CanvasGroup";
import { BaseShape } from "../canvas/shapes/BaseShape";
import { BaseStyle } from "../canvas/styles/BaseStyle";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasComponent implements AfterContentInit, OnDestroy {
    private document;
    private elRef;
    contentChildren: QueryList<NgvasBaseComponent<BaseStyle>>;
    private _canvasGroup;
    private _width;
    private _height;
    private _isActive;
    private _shape;
    private _contentSubscription;
    constructor(document: Document, elRef: ElementRef);
    width: number;
    height: number;
    active: boolean;
    readonly shape: EventEmitter<BaseShape>;
    getShape(): CanvasGroup;
    /**
     * Fires once after ng-content is intitialized.
     */
    ngAfterContentInit(): void;
    /**
     * Fires when the component is destroyed.
     */
    ngOnDestroy(): void;
}
