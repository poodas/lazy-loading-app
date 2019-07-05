import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModRoutingModule } from "./dialog-mod-routing.module";
import { DialogComponent } from "./dialog/dialog.component";

import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, DialogModRoutingModule, CheckboxModule, FormsModule]
})
export class DialogModModule {}
