# Ngvas
## An Angular2 Module for HTML Canvas

DO NOT USE. Not production ready yet.

Example HTML with Ngvas components:

```html
<ngvas [width]="500" [height]="500">
    <template ngFor let-rect [ngForOf]="rects">
        <ngvas-rectangle [fill]="'red'" [xy]="[rect, rect]" [width]="rect" [height]="rect"></ngvas-rectangle>
    </template>
</ngvas>
```
