import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionService } from 'src/services/region.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RegionComponent,
    ListRegionComponent,
    AddRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    RegionService
  ]
})
export class RegionModule { }
