
import { ContextTransformer } from "./shapes/interfaces";
import { Group }              from "./Group";


const canvasCtxt: ContextTransformer = Object.freeze({
    scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, moveX: 0, moveY: 0, rotate: 0,
});


function createOffscreenCanvas (canvas: HTMLCanvasElement) {
    const c = document.createElement("canvas");
    c.width = canvas.width;
    c.height = canvas.height;
    return c;
}


export class CanvasGroup extends Group {

    private _reqAniFrameId = 0;

    public constructor (
        canvas: HTMLCanvasElement,
        offscreenCanvas = createOffscreenCanvas(canvas),
        isActive = false
    ) {
        // as any disables null check.
        super(canvas, offscreenCanvas.getContext("2d") as CanvasRenderingContext2D, canvas.id || "CanvasGroup");
        super.isActive = isActive;
        this.width = canvas.width;
        this.height = canvas.height;
        // Async so other shapes can be added before first draw.
        this._reqAniFrameId = window.requestAnimationFrame(() => this.draw(canvasCtxt));
    }


    public redraw (): void {
        this.draw(canvasCtxt);
    }


    public get context () {
        return this.ctx;
    }

    public get isActive () {
        return super.isActive;
    }

    public set isActive (v: boolean) {
        if (super.isActive === false && v === true) {
            this._reqAniFrameId = window.requestAnimationFrame(() => this.draw(canvasCtxt));
        } else {
            window.cancelAnimationFrame(this._reqAniFrameId);
            this._reqAniFrameId = 0;
        }
        super.isActive = v;
    }


    public draw (ctxt: ContextTransformer) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        super.draw(ctxt);
        (this.canvas.getContext("2d") as CanvasRenderingContext2D).putImageData(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height), 0, 0);
        if (this.isActive) {
            this._reqAniFrameId = window.requestAnimationFrame(() => this.draw(canvasCtxt));
        }
    }


    public isHit () {
        return true;
    }
}


// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function() {

    let lastTime = 0;
    const vendors = ["ms", "moz", "webkit", "o"];

    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = (window as any)[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame  = (window as any)[vendors[x] + "CancelAnimationFrame"]
                                       || (window as any)[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (! window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback: Function) {
            const currTime = new Date().getTime();
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (! window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

}());
