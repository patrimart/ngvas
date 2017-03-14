import { IShape } from "./shapes";
export interface IGroup extends IShape {
    numChildren(): number;
    addChild(shape: IShape): this;
    removeChild(shape: IShape): this;
    removeChildAt(index: number): IShape;
    removeAllChildren(): void;
}
