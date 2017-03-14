import { Point } from "./shapes/interfaces";
export declare class Boundary {
    private _boundary;
    setPoint(point: Point): void;
    readonly border: [Point, Point];
    readonly width: number;
    readonly height: number;
    readonly center: Point;
    reset(): void;
    clone(): Boundary;
}
