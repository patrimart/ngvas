"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easing_1 = require("./easing");
class TweenManager {
    constructor() {
        this._collection = [];
    }
    tween() {
        this._collection = this._collection.filter(f => f());
    }
    clear() {
        this._collection = [];
    }
    addTween(shape, tween, duration, toValues, paramKeys, callback) {
        const start = Date.now();
        const end = Date.now() + duration;
        const startValues = paramKeys.map(k => shape[k]);
        tween = tween || easing_1.easeLinear;
        this._collection.push(function () {
            const now = Date.now();
            if (now >= end) {
                paramKeys.forEach(function (k, i) { shape[k] = toValues[i]; });
                if (callback !== undefined) {
                    callback(shape);
                }
                return false;
            }
            const results = startValues.map((v, i) => tween(now - start, v, toValues[i] - v, duration));
            paramKeys.forEach(function (p, i) { shape[p] = results[i]; });
            return true;
        });
    }
}
exports.TweenManager = TweenManager;
//# sourceMappingURL=TweenManager.js.map