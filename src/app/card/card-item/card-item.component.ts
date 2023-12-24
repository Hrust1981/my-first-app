import { Component, Input, NgModule } from '@angular/core';
import { User } from '../../model/user.model';
import { CardListComponent } from "../card-list/card-list.component";
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
    selector: 'app-card-item',
    standalone: true,
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.css',
    imports: [NgIf, FormsModule]
})
export class CardItemComponent {

  @Input() selectedUser!: User;
  
}
