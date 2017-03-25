"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("./easing");
class TweenManager {
    constructor() {
        this._collection = [];
    }
    // private _preExecutor: Function[] = [];
    // private _postExecutor: Function[] = [];
    /**
     * Execute tweens.
     */
    tween() {
        // this._preExecutor.forEach(e => e());
        this._collection = this._collection.filter(f => f());
        // this._postExecutor.forEach(e => e());
    }
    clear() {
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
    addTween(target, tween, duration, toValues, paramKeys, callback, priority = 10, preFunc, postFunc) {
        const start = Date.now();
        const end = Date.now() + duration;
        const startValues = paramKeys.map(k => target[k]);
        const func = function () {
            const now = Date.now();
            if (preFunc !== undefined) {
                preFunc();
            }
            if (now >= end) {
                paramKeys.forEach(function (k, i) { target[k] = toValues[i]; });
                if (postFunc !== undefined) {
                    postFunc(toValues);
                }
                if (callback !== undefined) {
                    callback(target);
                }
                return false;
            }
            const results = startValues.map((v, i) => (tween || easing_1.easeLinear)(now - start, v, toValues[i] - v, duration));
            paramKeys.forEach(function (p, i) { target[p] = results[i]; });
            if (postFunc !== undefined) {
                postFunc(results);
            }
            return true;
        };
        func["$priority"] = priority;
        this._collection.push(func);
        this._collection.sort((a, b) => a.$priority - b.$priority);
    }
}
exports.TweenManager = TweenManager;
//# sourceMappingURL=TweenManager.js.map