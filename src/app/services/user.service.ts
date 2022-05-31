import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = `http://localhost:3000/users`;

  constructor(
    private http: HttpClient
  ) { }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API_URL}`, user);
  }
}
