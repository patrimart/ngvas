
import { TweenFunc }  from "./interfaces";
import { easeLinear } from "./easing";
import { BaseShape }  from "../shapes/BaseShape";


export class TweenManager {

    private _collection: (() => boolean)[] = [];


    public tween (): void {
        this._collection = this._collection.filter(f => f());
    }

    public clear (): void {
        this._collection = [];
    }

    public addTween (shape: BaseShape, tween: TweenFunc, duration: number, toValues: number[], paramKeys: string[], callback?: (shape: BaseShape) => void) {

        const start = Date.now();
        const end = Date.now() + duration;
        const startValues = paramKeys.map(k => (shape as any)[k]);
        tween = tween || easeLinear;

        this._collection.push(function () {

            const now = Date.now();
            if (now >= end) {
                paramKeys.forEach(function (k, i) { (shape as any)[k] = toValues[i]; });
                if (callback !== undefined) { callback(shape); }
                return false;
            }

            const results = startValues.map((v, i) => tween(now - start, v, toValues[i] - v, duration));
            paramKeys.forEach(function (p, i) { (shape as any)[p] = results[i]; });
            return true;
        });
    }
}
