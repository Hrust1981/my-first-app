import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../model/user.model';
import { RouterLink } from '@angular/router';
import { CardItemComponent } from "../card-item/card-item.component";

@Component({
    selector: 'app-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [NgFor, RouterLink, CardItemComponent]
})
export class CardListComponent {

  cardsUser: User[] = [
    {id: 1, name: 'John', surname: 'Johnovich', age: 20, email: 'john@mail.com'},
    {id: 2, name: 'Den', surname: 'Denovich', age: 22, email: 'den@mail.com'},
    {id: 3, name: 'Mark', surname: 'Markovich', age:32, email: 'mark@mail.com'},
    {id: 4, name: 'Yakov', surname: 'Yakovlevich', age: 19, email: 'yakov@mail.com'},
    {id: 5, name: 'Ben', surname: 'Benovich', age: 35, email: 'ben@mail.com'},
  ]

  selectedUser!: User;

  onEdit(user: User) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
  
  onDelete(id: number) {
    var index = this.cardsUser.map(function(e) {return e.id}).indexOf(id);
    this.cardsUser.splice(index, 1);
  }

}
