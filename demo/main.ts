

import { NgModule, Component }    from "@angular/core";
import { BrowserModule }          from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgvasModule } from "ngvas";


@Component({
  selector: "ngvas-app",
  template: `
    <h1>Ngvas App Demo</h1>
    <ngvas [width]="500" [height]="500">
      <template ngFor let-rect [ngForOf]="rects">
        <ngvas-rectangle [fill]="'red'" [name]="'Rect_' + rect" [xy]="[rect, rect]" [width]="rect" [height]="rect"></ngvas-rectangle>
      </template>
    </ngvas>
  `,
})
class AppComponent {

  private _rects = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ];

  public rects = [10];

  constructor () {
    setTimeout(() => this.rects.push(this._rects.pop()), 1000);
    setTimeout(() => this.rects.push(this._rects.pop()), 2000);
    setTimeout(() => this.rects.push(this._rects.pop()), 3000);
    setTimeout(() => this.rects.push(this._rects.pop()), 4000);
  }
}


@NgModule({
  imports:      [ BrowserModule, NgvasModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);
