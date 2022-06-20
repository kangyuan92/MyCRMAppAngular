import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
