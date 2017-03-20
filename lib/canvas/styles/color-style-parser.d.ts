import { ColorStyle } from "./interfaces";
export declare type RGBAColor = [number, number, number, number];
export declare function parseColorStyle(color: ColorStyle | number): RGBAColor;
export declare function toRgbaString(color: RGBAColor): string;
