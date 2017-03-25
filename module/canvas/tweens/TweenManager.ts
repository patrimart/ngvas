
import { TweenFunc }  from "./interfaces";
import { easeLinear } from "./easing";
import { BaseShape }  from "../shapes/BaseShape";


export class TweenManager {

    private _collection: (() => boolean)[] = [];
    // private _preExecutor: Function[] = [];
    // private _postExecutor: Function[] = [];

    /**
     * Execute tweens.
     */
    public tween (): void {
        // this._preExecutor.forEach(e => e());
        this._collection = this._collection.filter(f => f());
        // this._postExecutor.forEach(e => e());
    }


    public clear (): void {
        this._collection = [];
        // this._preExecutor = [];
        // this._postExecutor = [];
    }


    // public addPreExecutor (f: Function) {
    //     this._preExecutor.push(f);
    // }


    // public addPostExecutor (f: Function) {
    //     this._postExecutor.push(f);
    // }


    public addTween (
        target: any,
        tween: TweenFunc | undefined,
        duration: number,
        toValues: number[],
        paramKeys: string[],
        callback?: (target: BaseShape) => void,
        priority = 10,
        preFunc?: Function,
        postFunc?: (vals: number[]) => void,
    ) {

        const start = Date.now();
        const end = Date.now() + duration;
        const startValues = paramKeys.map(k => (target as any)[k]);

        const func = function () {

            const now = Date.now();
            if (preFunc !== undefined) { preFunc(); }

            if (now >= end) {
                paramKeys.forEach(function (k, i) { (target as any)[k] = toValues[i]; });
                if (postFunc !== undefined) { postFunc(toValues); }
                if (callback !== undefined) { callback(target); }
                return false;
            }

            const results = startValues.map((v, i) => (tween || easeLinear)(now - start, v, toValues[i] - v, duration));
            paramKeys.forEach(function (p, i) { (target as any)[p] = results[i]; });
            if (postFunc !== undefined) { postFunc(results); }
            return true;
        };

        (func as any)["$priority"] = priority;

        this._collection.push(func);
        this._collection.sort((a: any, b: any) => a.$priority - b.$priority);
    }
}
