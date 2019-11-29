import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// only for dog picture
import {HttpClientModule} from '@angular/common/http';

import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import {DemoMaterialModule} from './material-module';

import { AppComponent } from "./app.component";
import { IntroComponent } from "./intro/intro.component";
import { EnsembleComponent } from "./ensemble/ensemble.component";
import { PerformanceService } from './performance.service';

@NgModule({
  declarations: [AppComponent, IntroComponent, EnsembleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: IntroComponent },
      { path: "intro", component: IntroComponent },
      { path: "ensemble", component: EnsembleComponent }
    ])
  ],
  exports: [RouterModule],
  providers: [PerformanceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
