import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModRoutingModule } from './dialog-mod-routing.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    DialogModRoutingModule
  ]
})
export class DialogModModule { }
