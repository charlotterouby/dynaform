import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DynaformLibModule } from "dynaform-lib";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DynaformLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
