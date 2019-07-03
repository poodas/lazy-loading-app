import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./home-mod/home-mod.module#HomeModModule"
  },
  {
    path: "dialog",
    loadChildren: "./dialog-mod/dialog-mod.module#DialogModModule"
  },
  {
    path: "data",
    loadChildren: "./data-mod/data-mod.module#DataModModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
