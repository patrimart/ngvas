"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CircleHitArea {
    constructor(width, height, offset = 1) {
        this.width = width;
        this.height = height;
        this.offset = offset;
        console.log(this.width, this.height, this.offset);
    }
    isHit(x, y, globalCtx, target) {
        console.log(x, y, globalCtx, target);
        return false;
    }
    destroy() {
        /* Empty */
    }
}
exports.CircleHitArea = CircleHitArea;
//# sourceMappingURL=CircleHitArea.js.map