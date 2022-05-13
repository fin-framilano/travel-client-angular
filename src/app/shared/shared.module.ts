import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemsComponent } from './components/list-items/list-items.component';



@NgModule({
  declarations: [

    ListItemsComponent
  ], 
  imports: [
    CommonModule
  ],
  exports:[
    ListItemsComponent
  ]
})
export class SharedModule { }
