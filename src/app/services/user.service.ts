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
  getUser(id: any): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/${id}`)
  }
  listUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.API_URL}`);
  }
  updateUser(user: IUser) {
    return this.http.put<IUser>(`${this.API_URL}/${user.id}`, user);
  }
  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API_URL}/${id}`);
  }
  getEmail(email: string): Observable<IUser>{
    return this.http.get<IUser>(`http://localhost:300/user?email=${email}`)
  }
}
