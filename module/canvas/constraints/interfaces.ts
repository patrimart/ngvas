
import { IShapeProps } from "../shapes/interfaces";

// export type ConstraintFunction = (clamps: ContextTransformerClamps) => (ctx: ContextTransformer) => ContextTransformer;
export type ConstraintFunction = (ctxt: IShapeProps) => IShapeProps;


export interface IConstrainable {
    withConstraint (...func: ConstraintFunction[]): this;
}

/**
 * A collection of min/max tuples for movement and shape.
 */
// export interface ContextTransformerClamps {
//     x?: [number, number];
//     y?: [number, number];
//     width?: [number, number];
//     height?: [number, number];
//     scaleX?: [number, number];
//     scaleY?: [number, number];
//     skewX?: [number, number];
//     skewY?: [number, number];
//     rotation?: [number, number];
// }
