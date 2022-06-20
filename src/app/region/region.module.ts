import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegionComponent,
    ListRegionComponent,
    AddRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    FormsModule
  ]
})
export class RegionModule { }
