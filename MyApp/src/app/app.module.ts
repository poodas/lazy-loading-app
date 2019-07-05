import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
//Prime classes
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
