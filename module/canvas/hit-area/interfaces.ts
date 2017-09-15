
import { ContextTransformer } from "../shapes/interfaces";
import { ITraceable }         from "../styles/interfaces";


export type HitAreaConstructor<T extends IHitArea> = { new (...args: any[]): T };


export interface IHitArea {
    isHit (x: number, y: number, globalCtx: ContextTransformer, target: ITraceable): boolean;
    destroy (): void;
}
