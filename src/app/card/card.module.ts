import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-item/card-item.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardListComponent,
    CardItemComponent
  ],
  exports: [
    CardListComponent,
    CardItemComponent,
  ]
})
export class CardModule { }
