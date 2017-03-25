
import { NgModule, Component }    from "@angular/core";
import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule, tweens, hitAreas } from "ngvas";


@Component({
  selector: "ngvas-app",
  template: `
    <h1>Ngvas App Demo</h1>
    <ngvas [width]="500" [height]="500" (ready)="tweenComplete()">

      <ngvas-rectangle [fill]="fill" [translate]="xy" [size]="size" [rotate]="rotate" origin="center"></ngvas-rectangle>
      <ngvas-circle [stroke]="stroke" [translate]="xy" [radius]="50" origin="center"></ngvas-circle>
      <ngvas-rectangle [fill]="squareFill" [translate]="squareTranslate" [size]="[100, 100]" origin="center" [hitArea]="pixelHitArea"
        (click)="onClick($event)" (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseLeave($event)"></ngvas-rectangle>

      <!--
      <ngvas-circle fill="#ff0000" [x]="250" [y]="250" [radius]="50" [translate]="[[50, 50], 1000]" origin="center"></ngvas-circle>
      <ngvas-arc fill="#ff0000" [x]="250" [y]="250" [radius]="50" [angle]="[270, 1000]" origin="center" [connectToCenter]="true"></ngvas-arc>
      <ngvas-bezier [stroke]="{ width: 4 }" [x]="50" [y]="50" [curves]="[[ [100, 100], [150, 450], [400, 300], [400, 400] ]]"></ngvas-bezier>
      <ngvas-image fill="#ff0000" [width]="100" [height]="100" src="../test/bird.jpg" [x]="10" [y]="10" [translate]="[[400, 400], 2000]"></ngvas-image>
      <ngvas-line [stroke]="{ width: 4 }" [lines]="[ [[100, 100], [200, 200]], [[200, 200], [100, 400]] ]"></ngvas-line>
      <ngvas-quadratic [stroke]="{ width: 4 }" [x]="50" [y]="50" [curves]="[[ [100, 100], [150, 450], [400, 400] ]]"></ngvas-quadratic>
      <ngvas-text fill="#0000ff" [textStyle]="{ font: '48px Arial' }" [x]="50" [y]="250" text="This is text."></ngvas-text>
      <ngvas-polygon fill="#ff0000" [x]="50" [y]="50" [sides]="[[ [100, 100], [150, 450] ]]"></ngvas-polygon>
      -->

    </ngvas>
  `,
})
class AppComponent {

  private i     = 0;
  private _size = [ 20, 80, 20, 80 ];
  private _xy   = [ [0, -300], [300, 0], [0, 300], [-300, 0] ];
  private _fill = [ 0xff0000, 0xffff00, 0x00ff00, 0x0000ff ];

  public size: any   = [this._size[0], this._size[0]];
  public rotate: any = 0;
  public xy: any     = [ 100, 100 ];
  public fill: any   = this._fill[0];
  public stroke: any = { width: this._size[0] / 4, style: this._fill[this.i] };

  public squareFill = 0x666666;
  public squareTranslate = [250, 250];

  public pixelHitArea = hitAreas.PixelHitArea;


  public tweenComplete () {
    // Prevents Angular Error: "Expression has changed after it was checked."
    setTimeout(() => {
      if (++this.i > 3) { this.i = 0; }
      this.rotate = [ this._size[this.i] * 5, 1000, tweens.easings.easeInOutSine, () => this.tweenComplete() ];
      this.size   = [ [this._size[this.i], this._size[this.i]], 1000, tweens.easings.easeInOutSine ];
      this.xy     = [ this._xy[this.i], 1000, tweens.easings.easeInOutSine ];
      this.fill   = [ this._fill[this.i], 1000, tweens.easings.easeInOutSine ];
      this.stroke = [ { width: this._size[this.i] / 4, style: this._fill[this.i] }, 1000, tweens.easings.easeInOutSine];
    });
  }

  public onClick (e: MouseEvent): void {
    console.log(e);
    this.squareTranslate = [[0, -100], 500, tweens.easings.easeOutCircular, () => this.squareTranslate = [[0, 100], 800, tweens.easings.easeOutBounce]];
  }

  public onMouseEnter (e: MouseEvent): void {
    this.squareFill = 0x009900;
  }

  public onMouseLeave (e: MouseEvent): void {
    this.squareFill = 0x666666;
  }
}


@NgModule({
  imports:      [ BrowserModule, NgvasModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
