import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-item/card-item.component';

const routes: Routes = [
  {path: '', component: CardListComponent},
  {path: 'user/:id', component: CardItemComponent}
];

@NgModule({
  imports: [ RouterModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
