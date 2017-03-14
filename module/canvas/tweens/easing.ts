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

const PI_M2 = 6.2832; // Math.PI * 2;
const PI_D2 = 1.5708; // Math.PI / 2;

/*
Linear
---------------------------------------------------------------------------------
*/

export function easeLinear (t: number, b: number, c: number, d: number): number {
    return c * t / d + b;
}

/*
Sine
---------------------------------------------------------------------------------
*/

export function easeInSine (t: number, b: number, c: number, d: number): number {
    return -c * Math.cos(t / d * PI_D2) + c + b;
}

export function easeOutSine (t: number, b: number, c: number, d: number): number {
    return c * Math.sin(t / d * PI_D2) + b;
}

export function easeInOutSine (t: number, b: number, c: number, d: number): number {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

/*
Quintic
---------------------------------------------------------------------------------
*/

export function easeInQuint (t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t * t * t * t + b;
}

export function easeOutQuint (t: number, b: number, c: number, d: number): number {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

export function easeInOutQuint (t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

/*
Quartic
---------------------------------------------------------------------------------
*/

export function easeInQuart (t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t * t * t + b;
}

export function easeOutQuart (t: number, b: number, c: number, d: number): number {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

export function easeInOutQuart (t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

/*
Quadratic
---------------------------------------------------------------------------------
*/

export function easeInQuad (t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t + b;
}

export function easeOutQuad (t: number, b: number, c: number, d: number): number {
    return -c * (t /= d) * (t - 2) + b;
}

export function easeInOutQuad (t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

/*
Exponential
---------------------------------------------------------------------------------
*/

export function easeInExpo (t: number, b: number, c: number, d: number): number {
    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

export function easeOutExpo (t: number, b: number, c: number, d: number): number {
    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}

export function easeInOutExpo (t: number, b: number, c: number, d: number): number {
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

/*
Elastic
---------------------------------------------------------------------------------
*/

export function easeInElastic (t: number, b: number, c: number, d: number, a?: number, p?: number): number {
    let s: number;
    if (t === 0) { return b; }
    if ((t /= d) === 1) { return b + c; }
    if (! p) { p = d * 0.3; };
    if (! a || a < Math.abs(c)) { a = c; s = p / 4; } else { s = p / PI_M2 * Math.asin (c / a); }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin( (t * d - s) * PI_M2 / p )) + b;
}

export function easeOutElastic (t: number, b: number, c: number, d: number, a?: number, p?: number): number {
    let s: number;
    if (t === 0) { return b; }
    if ((t /= d) === 1) { return b + c; }
    if (! p) { p = d * 0.3; }
    if (!a || a < Math.abs(c)) { a = c; s = p / 4; } else { s = p / PI_M2 * Math.asin (c / a); };
    return (a * Math.pow(2, -10 * t) * Math.sin( (t * d - s) * PI_M2 / p ) + c + b);
}

export function easeInOutElastic (t: number, b: number, c: number, d: number, a?: number, p?: number): number {
    let s: number;
    if (t === 0) { return b; }
    if ((t /= d / 2) === 2) { return b + c; }
    if (! p) { p = d * (.3 * 1.5); }
    if (!a || a < Math.abs(c)) { a = c; s = p / 4; } else { s = p / PI_M2 * Math.asin(c / a); }
    if (t < 1) { return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin( (t * d - s) * PI_M2 / p )) + b; }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p ) * .5 + c + b;
}

/*
Circular
---------------------------------------------------------------------------------
*/

export function easeInCircular (t: number, b: number, c: number, d: number): number {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

export function easeOutCircular (t: number, b: number, c: number, d: number): number {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

export function easeInOutCircular (t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) { return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b; }
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

/*
Back
---------------------------------------------------------------------------------
*/

export function easeInBack (t: number, b: number, c: number, d: number, s = 1.70158): number {
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}

export function easeOutBack (t: number, b: number, c: number, d: number, s = 1.70158): number {
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

export function easeInOutBack (t: number, b: number, c: number, d: number, s = 1.70158): number {
    if ((t /= d / 2) < 1) { return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b; }
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1 ) * t + s) + 2) + b;
}

/*
Bounce
---------------------------------------------------------------------------------
*/

export function easeInBounce (t: number, b: number, c: number, d: number): number {
    return c - easeOutBounce (d - t, 0, c, d) + b;
}

export function easeOutBounce (t: number, b: number, c: number, d: number): number {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}

export function easeInOutBounce (t: number, b: number, c: number, d: number): number {
    if (t < d / 2) {
        return easeInBounce (t * 2, 0, c, d) * .5 + b;
    } else {
        return easeOutBounce (t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
}

/*
Cubic
---------------------------------------------------------------------------------
*/

export function easeInCubic (t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t * t + b;
}

export function easeOutCubic (t: number, b: number, c: number, d: number): number {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}

export function easeInOutCubic (t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) { return c / 2 * t * t * t + b; }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}
