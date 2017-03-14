
import { IHitArea }           from "./interfaces";
import { ContextTransformer } from "../shapes/interfaces";
import { BaseShape }          from "../shapes/BaseShape";


export class RectHitArea implements IHitArea {


    public constructor (
        private width: number,
        private height: number,
        private offset = 1,
    ) {
        console.log(this.width, this.height, this.offset);
    }


    public isHit (x: number, y: number, globalCtx: ContextTransformer, target: BaseShape): boolean {

        console.log(x, y, globalCtx, target);
        return false;
    }


    public destroy (): void {
        /* Empty */
    }
}
