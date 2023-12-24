import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    const url = `${environment.api_url}/users`;
    return this.http.get<User[]>(url);
  }

  deleteUser(id: number) {
    const url = `${environment.api_url}/users/${id}`
    return this.http.delete<User>(url);
  }
}
