/*
    TERMS OF USE - EASING EQUATIONS
    ---------------------------------------------------------------------------------
    Open source under the BSD License.
    Copyright © 2001 Robert Penner All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer. Redistributions in binary
    form must reproduce the above copyright notice, this list of conditions and
    the following disclaimer in the documentation and/or other materials provided
    with the distribution. Neither the name of the author nor the names of
    contributors may be used to endorse or promote products derived from this
    software without specific prior written permission.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    ---------------------------------------------------------------------------------
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI_M2 = 6.2832; // Math.PI * 2;
const PI_D2 = 1.5708; // Math.PI / 2;
/*
Linear
---------------------------------------------------------------------------------
*/
function easeLinear(t, b, c, d) {
    return c * t / d + b;
}
exports.easeLinear = easeLinear;
/*
Sine
---------------------------------------------------------------------------------
*/
function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * PI_D2) + c + b;
}
exports.easeInSine = easeInSine;
function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * PI_D2) + b;
}
exports.easeOutSine = easeOutSine;
function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
exports.easeInOutSine = easeInOutSine;
/*
Quintic
---------------------------------------------------------------------------------
*/
function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}
exports.easeInQuint = easeInQuint;
function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
exports.easeOutQuint = easeOutQuint;
function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}
exports.easeInOutQuint = easeInOutQuint;
/*
Quartic
---------------------------------------------------------------------------------
*/
function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}
exports.easeInQuart = easeInQuart;
function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}
exports.easeOutQuart = easeOutQuart;
function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}
exports.easeInOutQuart = easeInOutQuart;
/*
Quadratic
---------------------------------------------------------------------------------
*/
function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}
exports.easeInQuad = easeInQuad;
function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}
exports.easeOutQuad = easeOutQuad;
function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}
exports.easeInOutQuad = easeInOutQuad;
/*
Exponential
---------------------------------------------------------------------------------
*/
function easeInExpo(t, b, c, d) {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}
exports.easeInExpo = easeInExpo;
function easeOutExpo(t, b, c, d) {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
exports.easeOutExpo = easeOutExpo;
function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
        return b;
    }
    if (t === d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
exports.easeInOutExpo = easeInOutExpo;
/*
Elastic
---------------------------------------------------------------------------------
*/
function easeInElastic(t, b, c, d, a, p) {
    let s;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    ;
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
}
exports.easeInElastic = easeInElastic;
function easeOutElastic(t, b, c, d, a, p) {
    let s;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    ;
    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * PI_M2 / p) + c + b);
}
exports.easeOutElastic = easeOutElastic;
function easeInOutElastic(t, b, c, d, a, p) {
    let s;
    if (t === 0) {
        return b;
    }
    if ((t /= d / 2) === 2) {
        return b + c;
    }
    if (!p) {
        p = d * (.3 * 1.5);
    }
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else {
        s = p / PI_M2 * Math.asin(c / a);
    }
    if (t < 1) {
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p) * .5 + c + b;
}
exports.easeInOutElastic = easeInOutElastic;
/*
Circular
---------------------------------------------------------------------------------
*/
function easeInCircular(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}
exports.easeInCircular = easeInCircular;
function easeOutCircular(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
exports.easeOutCircular = easeOutCircular;
function easeInOutCircular(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}
exports.easeInOutCircular = easeInOutCircular;
/*
Back
---------------------------------------------------------------------------------
*/
function easeInBack(t, b, c, d, s = 1.70158) {
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}
exports.easeInBack = easeInBack;
function easeOutBack(t, b, c, d, s = 1.70158) {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}
exports.easeOutBack = easeOutBack;
function easeInOutBack(t, b, c, d, s = 1.70158) {
    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
}
exports.easeInOutBack = easeInOutBack;
/*
Bounce
---------------------------------------------------------------------------------
*/
function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
}
exports.easeInBounce = easeInBounce;
function easeOutBounce(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    }
    else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    }
    else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}
exports.easeOutBounce = easeOutBounce;
function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
        return easeInBounce(t * 2, 0, c, d) * .5 + b;
    }
    else {
        return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}
exports.easeInOutBounce = easeInOutBounce;
/*
Cubic
---------------------------------------------------------------------------------
*/
function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}
exports.easeInCubic = easeInCubic;
function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}
exports.easeOutCubic = easeOutCubic;
function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}
exports.easeInOutCubic = easeInOutCubic;
//# sourceMappingURL=easing.js.map