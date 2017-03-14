
/**
 * Allows regluar browser usage.
 */

const libCanvas = require("./lib/canvas");

global.CanvasLib = {
    init: libCanvas.init,
    hitAreas: libCanvas.hitAreas,
    tweens: libCanvas.tweens,
};
