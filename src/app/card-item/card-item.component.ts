import { Component, Input } from '@angular/core';
import { User } from '../model/user.model';
import { CardListComponent } from "../card-list/card-list.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card-item',
    standalone: true,
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.css',
    imports: []
})
export class CardItemComponent {

  @Input() selectedUser!: User;
  
}
