# ngvas
## An Angular2 / Angular4 Module for HTML Canvas


The **ngvas** library allows you to control the `<canvas>` element from within Angular 2. Or is it 4 now?

Look in the `/demo` directory for a working example.

Experiment with **ngvas** in a [Plunker](https://plnkr.co/edit/Kc57baYFUnSY8MfDznZs?p=preview).

---

Example Angular Module:

```js
import { NgvasModule, tweens, hitAreas } from "ngvas";

@NgModule({
  imports:      [ BrowserModule, NgvasModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }
```

Example HTML with Ngvas components:

```html
<ngvas [width]="500" [height]="500" (ready)="onNgvasInit()">
    <template ngFor let-rect [ngForOf]="rects">
        <ngvas-rectangle [fill]="rect.color" [translate]="rect.xy" [width]="rect.w" [height]="rect.h" origin="center"></ngvas-rectangle>
    </template>
    <ngvas-circle [fill]="'#0000ff'" [x]="100" [y]="100" [radius]="50" origin="center" (click)="onClickHandler($event)" [hitArea]="PixelHitArea"></ngvas-circle>
</ngvas>
```

---

### Components

- `<ngvas>`: NgvasComponent - The parent component. Think of it as the `<canvas>` tag.
- `<ngvas-arc>`: NgvasArcComponent - [CanvasRenderingContext2D.arc()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)
- `<ngvas-bezier>`: NgvasBezierCurveComponent - [CanvasRenderingContext2D.bezierCurveTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
- `<ngvas-circle>`: NgvasCircleComponent - [CanvasRenderingContext2D.arc()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)
- `<ngvas-image>`: NgvasImageComponent - [CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
- `<ngvas-line>`: NgvasLineComponent - [CanvasRenderingContext2D.lineTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
- `<ngvas-polygon>`: NgvasPolygonComponent
- `<ngvas-quadratic>`: NgvasQuadraticCurveComponent - [CanvasRenderingContext2D.quadraticCurveTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
- `<ngvas-rectangle>`: NgvasRectangleComponent - [CanvasRenderingContext2D.fillRect()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)
- `<ngvas-text>`: NgvasTextComponent - [CanvasRenderingContext2D.fillText()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText)


#### `<ngvas>`: NgvasComponent Input Bindings

| @Input("name")  | Data Type  | Description                                        |
| --------------- | ---------- | -------------------------------------------------- |
| active          | `boolean`  | Sets if animation in the canvas is active or not.  |
| width           | `number`   | Sets the width of the `<canvas>` element.          |
| height          | `number`   | Sets the height of the `<canvas>` element.         |


#### `<ngvas>`: NgvasComponent Event Bindings

| @Output("name")  | Data Type         | Description                                     |
| ---------------- | ----------------- | ----------------------------------------------- |
| ready            | `NgvasComponent`  | Fires once when the component is initialized.   |

---

#### `<ngvas-*>`: NgvasBaseComponent Input Bindings

These input bindings are available on all `<ngvas-*>` components.

| @Input("name")  | Data Type    | Description                                                   |
| --------------- | ------------ | ------------------------------------------------------------- |
| name            | `string`     | The name of the component. Not used at this point.            |
| active          | `boolean`    | Sets if the animation is active on the component.             |
| visible         | `boolean`    | Sets if the component is visible on the canvas.               |
| x               | `number`     | Sets the x coordinate of the shape.                           |
| y               | `number`     | Sets the y coordinate of the shape.                           |
| origin          | `[number, number] | "center"` | Sets the x and y origin of the shape. `"center"` will lock the origin to the shape's center.  |
| width           | `number`     | Sets the width of the shape. Not applicable for many shapes.  |
| height          | `number`     | Sets the height of the shape. Not applicable for many shapes. |
| rotation        | `number`     | Sets the rotation of the shape in degrees.                    |
| scaleX          | `number`     | Sets the x scale of the shape.                                |
| scaleY          | `number`     | Sets the y scale of the shape in degrees.                     |
| skewX           | `number`     | Sets the x skew of the shape in degrees.                      |
| skewY           | `number`     | Sets the y skew of the shape.                                 |
| scale           | `TweenInput<S, [number, number]>`     | Scale multiplier.                                   |
| size            | `TweenInput<S, [number, number]>`     | Sets the width and height of the shape.             |
| skew            | `TweenInput<S, [number, number]>`     | Sets the X and Y skew of the shape.                 |
| rotate          | `TweenInput<S, number>`               | Rotates the shape by the specified degrees.         |
| translate       | `TweenInput<S, [number, number]>`     | Moves the shape the specified X and Y coordinates.  |
| animate         | `((shape: S) => boolean) | undefined` | This function is invoked on every frame request.    |
| constrain       | `ConstraintFunction[] | undefined`    | This function is invoked on event frame request.    |
| hitArea         | `typeof PixelHitArea`                 | A function to calculate if the current mouse coordinates are within a shape.  |
| opacity         | `number`  | Sets the overall opacity of the shape. It's proabably easier to use a fill or stroke `ColorStyle` with opacity. |
| compose         | `{ alpha?: number, overlay?: ComposeOverlay }`  | Sets how the shape is overlayed on the canvas. [CanvasRenderingContext2D.globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) |
| fill            | `TweenInput<S, ColorStyle>`  | Sets the fill color, gradient or pattern of the shape. [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) |
| stroke          | `TweenInput<S, { width:number, style:ColorStyle, join?:LineJoin, cap?:LineCap, dashOffset?:number, miterLimit?:number }>`  | Sets the stroke settings of the shape.  |
| shadow          | `TweenInput<S, { blur:number, color:string, offsetX:number, offsetY:number }>`  | Sets the shadow settings of the shape.  |


#### `<ngvas-*>`: NgvasBaseComponent Event Bindings

These event bindings are available on all `<ngvas-*>` components. **Note: a hit area is required for mouse events to work.**

| @Output("name")  | Data Type                | Description                                                     |
| ---------------- | ------------------------ | --------------------------------------------------------------- |
| click            | `MouseEvent`             | Emits a MouseEvent if the shape is clicked.                     |
| dblclick         | `MouseEvent`             | Emits a MouseEvent if the shape is double-clicked.              |
| wheel            | `WheelEvent`             | Emits a WheelEvent if the scroll wheel is used over the shape.  |
| mouseenter       | `MouseEvent`             | Emits a MouseEvent if the mouse pointer enters the shape.       |
| mouseleave       | `MouseEvent`             | Emits a MouseEvent if the mouse pointer leaves the shape.       |
| shape            | `BaseShape & BaseStyle`  | On init, emits the underlying class of the shape.               |

---

#### `<ngvas-arc>`: NgvasArcComponent Input Bindings

Draws a portion of a circle. `connectToCenter` to make a pie-chart shape.

| @Input("name")  | Data Type                       | Description                                                        |
| --------------- | ------------------------------- | ------------------------------------------------------------------ |
| angle           | `TweenInput<ArcShape, number>`  | The ending angle of the arc in degrees.                            |
| radius          | `TweenInput<ArcShape, number>`  | The radius of the arc.                                             |
| connectToCenter | `boolean`                       | If `true`, connects the arc to the center point like a pie slice.  |

Example:

```html
<ngvas-arc fill="#ff0000" [x]="250" [y]="250" [radius]="50" [angle]="270" origin="center" [connectToCenter]="true"></ngvas-arc>
```

---

#### `<ngvas-bezier>`: NgvasBezierCurveComponent Input Bindings

Draws one or more connected bezier curves.

| @Input("name")  | Data Type       | Description                          |
| --------------- | --------------- | ------------------------------------ |
| curves          | `BezierCurve[]` | An array of connected bezier curves. |

```html
<ngvas-bezier [stroke]="{ width: 4 }" [x]="50" [y]="50" [curves]="[[ [100, 100], [150, 450], [400, 300], [400, 400] ]]"></ngvas-bezier>
```

---

#### `<ngvas-circle>`: NgvasCircleComponent Input Bindings

Draws a circle. Basically, an arc with a 360 degree angle.

| @Input("name")  | Data Type                          | Description                |
| --------------- | ---------------------------------- | -------------------------- |
| radius          | `TweenInput<CircleShape, number>`  | The radius of the circle.  |

```html
<ngvas-circle fill="#ff0000" [x]="250" [y]="250" [radius]="50" origin="center"></ngvas-circle>
```

---

#### `<ngvas-image>`: NgvasImageComponent Input Bindings

Draws an image from the

| @Input("name")  | Data Type  | Description                 |
| --------------- | ---------- | --------------------------- |
| src             | `string`   | The URL path to the image.  |

```html
<ngvas-image fill="rgba(0,0,0,0)" [x]="10" [y]="10" [width]="100" [height]="100" src="../test/bird.jpg"></ngvas-image>
```

Note: As a temporary fix, `<ngvas-image>` must set `fill` to make it visible.


---

#### `<ngvas-line>`: NgvasLineComponent Input Bindings

Draws one or more connected lines.

| @Input("name")  | Data Type   | Description                   |
| --------------- | ----------- | ----------------------------- |
| lines           | `Line[]`    | An array of connected lines.  |

```html
<ngvas-line [stroke]="{ width: 4 }" [lines]="[ [[100, 100], [200, 200]], [[200, 200], [300, 100]] ]"></ngvas-line>
```

---

#### `<ngvas-polygon>`: NgvasPolygonComponent Input Bindings

Draws a shape with any combination of lines, bezier curves and quadratic curves.

| @Input("name")  | Data Type                                     | Description                                 |
| --------------- | --------------------------------------------- | ------------------------------------------- |
| sides           | `Array<Line | BezierCurve | QuadraticCurve>`  | An array of a variety of lines and curves.  |

```html
<ngvas-polygon fill="#ff0000" [x]="50" [y]="50" [sides]="sidesArray"></ngvas-polygon>
```

---

#### `<ngvas-quadratic>`: NgvasQuadraticCurveComponent Input Bindings

Draws one or more connected quadratic curves.

| @Input("name")  | Data Type           | Description                              |
| --------------- | ------------------- | ---------------------------------------- |
| curves          | `QuadraticCurve[]`  | An array of connected quadratic curves.  |

```html
<ngvas-quadratic [stroke]="{ width: 4 }" [x]="50" [y]="50" [curves]="[[ [100, 100], [150, 450], [400, 400] ]]"></ngvas-quadratic>
```

---

#### `<ngvas-text>`: NgvasTextComponent Input Bindings

Draws text.

| @Input("name")  | Data Type                                                         | Description                       |
| --------------- | ----------------------------------------------------------------- | --------------------------------- |
| text            | `string`                                                          | The text to display.              |
| textStyle       | `{ font?: string, align?: TextAlign, baseline?: TextBaseline }`   | The style of the displayed text.  |

```html
<ngvas-text fill="#0000ff" [textStyle]="{ font: '48px Arial' }" [x]="50" [y]="250" text="This is text."></ngvas-text>
```

---

### Tweening Inputs and Functions

You can set almost any value of a component to tween from its current value to a target value over a specified
period of time with specific easing.

```js
import { tweens } from "ngvas";

type TweenFunc = (time: number, startValue: number, changeValue: number, duration: number) => number;

type TweenInput <S, T> = T | [ T, number, TweenFunc | undefined, ((s: S) => void) | undefined ];

// Set the amount of pixels to move, the tween duration in MS, and the easing function to use.
const translateTween = [ [250, 250], 1000, tweens.easings.easeInOutSine ];
```

Example HTML:

```html
<ngvas-circle fill="#ff0000" [x]="50" [y]="50" [radius]="50" [translate]="translateTween" origin="center"></ngvas-circle>
```


#### Built-in Tweens

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

---

### Hit Area Functions

One function to calculate if the mouse coordinates are on a shape is available. It is pixel accurate and non-optimized.
Use it judiciously until more effecient hit area functions become available.

```js
import { hitAreas } from "ngvas";

import PixelHitArea = hitAreas.PixelHitArea;
```

---

### Types

Import interfaces:
```js
import * as types from "ngvas";
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

---

## TODOs for 1.0

- Improve docs.
- Unit tests with >90% coverage.
- Improve `originToCenter` for curves and polygon.
- Built-in Constraints.
- Add mouse events: mousedown, mouseup
- Add other hit area types: vector rectangle, circle.
- Optimization.


## TODOs for 1.x

- Add drag and drop events.
- Add HammerJS support.
- Grouping components.
- Optimization.
