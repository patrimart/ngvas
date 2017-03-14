
import { Point } from "./shapes/interfaces";


export class Boundary {

    private _boundary: [Point, Point] = [[0, 0], [0, 0]];

    public setPoint (point: Point) {
        const [[x1, y1], [x2, y2]] = this._boundary;
        this._boundary = [
            [Math.min(point[0], x1), Math.min(point[1], y1)],
            [Math.max(point[0], x2), Math.max(point[1], y2)],
        ];
    }

    public get border (): [Point, Point] {
        const [[x1, y1], [x2, y2]] = this._boundary;
        return [[x1, y1], [x2, y2]];
    }

    public get width (): number {
        const [[x1, ], [x2, ]] = this._boundary;
        return x2 - x1;
    }

    public get height (): number {
        const [[, y1], [, y2]] = this._boundary;
        return y2 - y1;
    }

    public get center (): Point {
        const [[x1, y1], [x2, y2]] = this._boundary;
        return [(x2 + x1) / 2, (y2 + y1) / 2];
    }

    public reset () {
        this._boundary = [[0, 0], [0, 0]];
    }

    public clone () {
        const b = new Boundary();
        const [[x1, y1], [x2, y2]] = this._boundary;
        b._boundary = [[x1, y1], [x2, y2]];
        return b;
    }
}
