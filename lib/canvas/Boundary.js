"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boundary {
    constructor() {
        this._boundary = [[0, 0], [0, 0]];
    }
    setPoint(point) {
        const [[x1, y1], [x2, y2]] = this._boundary;
        this._boundary = [
            [Math.min(point[0], x1), Math.min(point[1], y1)],
            [Math.max(point[0], x2), Math.max(point[1], y2)],
        ];
    }
    get border() {
        const [[x1, y1], [x2, y2]] = this._boundary;
        return [[x1, y1], [x2, y2]];
    }
    get width() {
        const [[x1,], [x2,]] = this._boundary;
        return x2 - x1;
    }
    get height() {
        const [[, y1], [, y2]] = this._boundary;
        return y2 - y1;
    }
    get center() {
        const [[x1, y1], [x2, y2]] = this._boundary;
        return [(x2 + x1) / 2, (y2 + y1) / 2];
    }
    reset() {
        this._boundary = [[0, 0], [0, 0]];
    }
    clone() {
        const b = new Boundary();
        const [[x1, y1], [x2, y2]] = this._boundary;
        b._boundary = [[x1, y1], [x2, y2]];
        return b;
    }
}
exports.Boundary = Boundary;
//# sourceMappingURL=Boundary.js.map