/*
 * Get new x,y on curve by given x
 * @params a,b,c,d {x:x,y:y}
 * @params x
 * @return {{x:new x on cruve ,y: new y on cruve}}
 */
function YBX(a, b, c, d, x) {
    const A = d.x - (3 * c.x) + (3 * b.x) - a.x, B = (3 * c.x) - (6 * b.x) + (3 * a.x), C = (3 * b.x) - (3 * a.x), D = a.x - x;
    return Bezier(a, b, c, d, cubic(A, B, C, D));
}
/*
 * Bezier Function
 * Get X,Y by t
 * Refer to https://pomax.github.io/bezierinfo/
 * @params a,b,c,d {x:x,y:y}
 * @params t is between 0-1
 * @return {{x:x on curve ,y:y on curve}}
 */
function Bezier(a, b, c, d, t) {
    const point = { x: 0, y: 0 }, mt = 1 - t, mt2 = mt * mt, mt3 = mt2 * mt;
    point.x = a.x * mt3 + b.x * 3 * mt2 * t + c.x * 3 * mt * t * t + d.x * t * t * t;
    point.y = a.y * mt3 + b.y * 3 * mt2 * t + c.y * 3 * mt * t * t + d.y * t * t * t;
    return point;
}
/*
 * Cubic Equation Calculator
 * refer to http://www.1728.org/cubic.htm
 *
 * ax³ + bx² + cx + d = 0
 * @params a,b,c,d
 * @return x
 */
function cubic(a, b, c, d) {
    let m, m2, k, n, n2, x, r, rc, theta, sign, dans;
    const f = ((3 * c) / a) - ((b * b) / (a * a)) / 3;
    const g = (2 * ((b * b * b) / (a * a * a)) - (9 * b * c / (a * a)) + (27 * (d / a))) / 27;
    const h = ((g * g) / 4) + ((f * f * f) / 27);
    if (h > 0) {
        m = -(g / 2) + Math.sqrt(h);
        k = m < 0 ? -1 : 1;
        m2 = Math.pow(m * k, 1 / 3);
        m2 = m2 * k;
        n = -(g / 2) - Math.sqrt(h);
        k = n < 0 ? -1 : 1;
        n2 = Math.pow((n * k), (1 / 3));
        n2 = n2 * k;
        x = (m2 + n2) - (b / (3 * a));
    }
    else {
        r = Math.sqrt((g * g / 4) - h);
        k = r < 0 ? -1 : 1;
        rc = Math.pow(r * k, 1 / 3) * k;
        theta = Math.acos(-g / (2 * r));
        x = 2 * (rc * Math.cos(theta / 3)) - (b / (3 * a));
        x = Math.round(x * 100000000000000) / 100000000000000;
    }
    if (f + g + h === 0) {
        sign = d < 0 ? -1 : 1;
        if (sign > 0) {
            dans = Math.pow(d / a, 1 / 3);
            dans = dans * -1;
        }
        else if (sign < 0) {
            d = d * -1;
            dans = Math.pow(d / a, 1 / 3);
        }
        x = dans;
    }
    return x || 0;
}
//# sourceMappingURL=points.js.map