import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModRoutingModule } from './data-mod-routing.module';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    DataModRoutingModule
  ]
})
export class DataModModule { }
