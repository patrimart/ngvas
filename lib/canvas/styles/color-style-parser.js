"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseColorStyle(color) {
    let rgbaColor;
    if (typeof color === "string") {
        color = color.trim();
        if (color.indexOf("rgba(") === 0) {
            rgbaColor = color.slice(5, -1).split(",").map(c => parseInt(c.trim(), 10));
        }
        else if (color.indexOf("rgb(") === 0) {
            rgbaColor = color.slice(4, -1).split(",").map(c => parseInt(c.trim(), 10));
            rgbaColor.push(1);
        }
        else if (color.indexOf("#") === 0 && color.length === 7) {
            rgbaColor = [color.slice(1, 3), color.slice(3, 5), color.slice(5), "1"].map(c => +`0x${c}`);
        }
        else if (color.indexOf("#") === 0 && color.length === 9) {
            rgbaColor = [color.slice(1, 3), color.slice(3, 5), color.slice(5), color.slice(6)].map(c => parseInt(c, 16));
            rgbaColor[3] /= 255;
        }
        else if (color.indexOf("#") === 0) {
            rgbaColor = [color.slice(1, 2), color.slice(2, 3), color.slice(3)].map(c => +`0x${c}${c}`);
            rgbaColor.push(1);
        }
        else {
            throw new ReferenceError(`The ngvas library does not understand the style "${color}".`);
        }
    }
    else if (typeof color === "number") {
        rgbaColor = [color >> 16, color >> 8 << 8, color, 1];
        rgbaColor[2] = (rgbaColor[2] - rgbaColor[1]);
        rgbaColor[1] = (rgbaColor[1] - (rgbaColor[0] << 16) - rgbaColor[2]) >> 8;
    }
    else {
        throw new ReferenceError(`The ngvas library does not understand the style "${color}".`);
    }
    return rgbaColor;
}
exports.parseColorStyle = parseColorStyle;
function toRgbaString(color) {
    return `rgba(${color.join()})`;
}
exports.toRgbaString = toRgbaString;
//# sourceMappingURL=color-style-parser.js.map