import { ElementRef, AfterContentInit, OnDestroy, QueryList, EventEmitter, Renderer2 } from "@angular/core";
import { CanvasGroup } from "../canvas/CanvasGroup";
import { BaseStyle } from "../canvas/styles/BaseStyle";
import { NgvasBaseComponent } from "./base.component";
export declare class NgvasComponent implements AfterContentInit, OnDestroy {
    private renderer;
    canvasRef: ElementRef;
    contentChildren: QueryList<NgvasBaseComponent<BaseStyle>>;
    private _canvasGroup;
    private _width;
    private _height;
    private _isActive;
    private _contentSubscription;
    ready: EventEmitter<NgvasComponent>;
    constructor(renderer: Renderer2);
    width: number;
    height: number;
    active: boolean;
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
