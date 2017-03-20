

import { NgModule, Component, AfterViewInit }    from "@angular/core";
import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule, tweens } from "ngvas";


@Component({
  selector: "ngvas-app",
  template: `
    <h1>Ngvas App Demo</h1>
    <ngvas [width]="500" [height]="500">
      <ngvas-circle [fill]="fill" [translate]="xy" [radius]="radius" [rotate]="rotate" origin="center"></ngvas-circle>
    </ngvas>
  `,
})
class AppComponent implements AfterViewInit {

  private _step   = 0;
  private _radius = [ 20, 80, 20, 80 ];
  private _xy     = [ [100, 100], [400, 100], [400, 400], [100, 400] ];
  private _fill   = [ 0xff0000, 0xffff00, 0x00ff00, 0x0000ff ];

  public radius: any = this._radius[0];
  public rotate: any = 0;
  public xy: any     = this._xy[0];
  public fill: any   = this._fill[0];

  public ngAfterViewInit () {
    this.tweenComplete();
  }

  public tweenComplete () {
    // Prevents Angular Error: "Expression has changed after it was checked."
    setTimeout(() => {
      if (++this._step > 3) { this._step = 0; }
      this.radius = [ this._radius[this._step]    , 1000, tweens.easings.easeInOutSine, () => this.tweenComplete() ];
      this.rotate = [ this._radius[this._step] * 5, 1000, tweens.easings.easeInOutSine ];
      this.xy     = [ this._xy[this._step]        , 1000, tweens.easings.easeInOutSine ];
      this.fill   = [ this._fill[this._step]      , 1000, tweens.easings.easeInOutSine ];
    });
  }
}


@NgModule({
  imports:      [ BrowserModule, NgvasModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
