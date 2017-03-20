# ngvas
## An Angular2 Module for HTML Canvas

DO NOT USE. Not production ready yet.

Example HTML with Ngvas components:

```html
<ngvas [width]="500" [height]="500">
    <template ngFor let-rect [ngForOf]="rects">
        <ngvas-rectangle [fill]="rect.color" [translate]="rect.xy" [width]="rect.w" [height]="rect.h" origin="center"></ngvas-rectangle>
    </template>
    <ngvas-circle [fill]="0x0000ff" [translate]="[[100, 100], 1000, tweens.easings.easeInOutSine]" [radius]="50" origin="center"></ngvas-circle>
</ngvas>
```

## API

### Types

```js
import * as types from "angvas";
```

```js
// Point = [ x, y ]
type Point = [number, number];

// Line = [ startPoint, endPoint ]
type Line = [Point, Point];

// QuadraticCurve = [ startPoint, controlPoint, endPoint ]
type QuadraticCurve = [Point, Point, Point];

// BexierCurve = [ startPoint, controlPoint0, controlPoint1, endPoint ]
type BezierCurve = [Point, Point, Point, Point];

// Example: Point | [ Point, durationInMS, TweenFunc]
type TweenInput <S extends BaseStyle, T> = T | [ T, number, TweenFunc | undefined, ((s: S) => void) | undefined ]

type ComposeOverlay = "source-over" | "source-in" | "source-out" | "source-atop" |
            "destination-over" | "destination-in" | "destination-out" | "destination-atop" |
            "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" |
            "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" |
            "exclusion" | "hue" | "saturation" | "color" | "luminosity";

// ColorStyle: 0xff9966, "#ff9966", "#ff9966ff", "rgb(255,200,150)", "rgba(255,200,150,0.5)
type ColorStyle = number | string | CanvasGradient | CanvasPattern;
type LineJoin = "miter" | "bevel" | "round";
type LineCap = "butt" | "round" | "square";
type TextAlign = "left" | "right" | "center" | "start" | "end";
type TextBaseline = "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
```


### Components

- `<ngvas></ngvas>`: NgvasComponent - The parent, will create a matching `<canvas>` tag.
- `<ngvas-arc></ngvas-arc>`: NgvasArcComponent - Creates an arc or, if connectToCenter, a pie shape.
  - `@Input("connectToCenter") (c: boolean)`
  - `@Input("radius") (v: TweenInput<CircleShape, number>)`
  - `@Input("angle") (v: TweenInput<ArcShape, number>)`
- `<ngvas-bezier></ngvas-bezier>`: NgvasBezierCurveComponent
  - `@Input("curves") (cs: BezierCurve[])`
- `<ngvas-circle></ngvas-circle>`: NgvasCircleComponent
  - `@Input("radius") (v: TweenInput<CircleShape, number>)`
- `<ngvas-image></ngvas-image>`: NgvasImageComponent
  - `@Input("image") (url: string)`
- `<ngvas-line></ngvas-line>`: NgvasLineComponent
  - `@Input("lines") (ls: Line[])`
- `<ngvas-polygon></ngvas-polygon>`: NgvasPolygonComponent
  - `@Input("sides") (ls: Array<Line | BezierCurve | QuadraticCurve>)`
- `<ngvas-quadratic></ngvas-quadratic>`: NgvasQuadraticCurveComponent
  - `@Input("curves") (cs: QuadraticCurve[])`
- `<ngvas-rectangle></ngvas-rectangle>`: NgvasRectangleComponent
- `<ngvas-text></ngvas-text>`: NgvasTextComponent
  - `@Input("text") (t: string)`


All Ngvas components inherited the following interface.


### @Inputs

name (v: string)

active (v: boolean)

visible (v: boolean)

x (v: number)

y (v: number)

origin (v: [number, number] | "center")

width (v: number)

height (v: number)

rotation (v: number)

scale (v: TweenInput<S, [number, number]>)

size (v: TweenInput<S, [number, number]>)

skew (v: TweenInput<S, [number, number]>)

rotate (v: TweenInput<S, number>)

translate (v: TweenInput<S, [number, number]>)

animate (f: ((shape: S) => boolean) | undefined)

constrain (fs: ConstraintFunction[] | undefined)

hitArea (Clazz: typeof PixelHitArea)

opacity (alpha: number)

compose (c: { alpha?: number, overlay?: ComposeOverlay })

fill (f: TweenInput<BaseStyle, ColorStyle>)

stroke (s: TweenInput<S, { width: number, style: ColorStyle, join?: LineJoin, cap?: LineCap, dashOffset?: number, miterLimit?: number }>)

shadow (s: TweenInput<S, { blur: number, color: string, offsetX: number, offsetY: number }>)


### @Outputs

click (f: Function)


### Tweening Functions

```js
import { tweens } from "ngvas";

const translateTween = [ [100, 100], 1000, tweens.easings.easeInOutSine ];
```

- easeLinear
- easeInSine, easeOutSine, easeInOutSine
- easeInQuint, easeOutQuint, easeInOutQuint
- easeInQuart, easeOutQuart, easeInOutQuart
- easeInQuad, easeOutQuad, easeInOutQuad
- easeInExpo, easeOutExpo, easeInOutExpo
- easeInElastic, easeOutElastic, easeInOutElastic
- easeInCircular, easeOutCircular, easeInOutCircular
- easeInBack, easeOutBack, easeInOutBack
- easeInBounce, easeOutBounce, easeInOutBounce
- easeInCubic, easeOutCubic, easeInOutCubic


### Hit Area Functions

```js
import { hitAreas } from "ngvas";
import PixelHitArea = hitAreas.PixelHitArea;
```


## TODOs for 1.0

- Improve docs.
- Improve `originToCenter` for curves and polygon.
- Add mouse events: mouseover, mouseout, mousedown, mouseup.
- Add other hit area types: rectangle, circle.
- Optimization.
- Grouping components.
- Built-in Constraints.
