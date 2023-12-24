import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../model/user.model';
import { RouterLink } from '@angular/router';
import { CardItemComponent } from "../card-item/card-item.component";
import { CardsService } from '../services/cards.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [NgFor, RouterLink, CardItemComponent]
})
export class CardListComponent implements OnInit, OnDestroy {

  cardsUser: User[] = [];
  selectedUser!: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly cardsService: CardsService
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onEdit(user: User) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
  
  onDelete(id: number) {
    this.deleteCard(id);
  }

  getAllUsers() {
    this.cardsService.getAllUsers()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      (res) => {
        console.log('res', res);
        this.cardsUser = res;
      },
      (err) => console.error('Error', err)
    );
  }

  deleteCard(id: number) {
    this.cardsService.deleteUser(id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      (res) => {
        console.log('res', res);
        this.getAllUsers();
      },
      (err) => console.error('Error', err)
    );
  }

}
