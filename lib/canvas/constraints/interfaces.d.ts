import { IShapeProps } from "../shapes/interfaces";
export declare type ConstraintFunction = (ctxt: IShapeProps) => IShapeProps;
export interface IConstrainable {
    withConstraint(...func: ConstraintFunction[]): this;
}
