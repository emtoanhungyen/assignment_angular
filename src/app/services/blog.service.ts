import { TypeBlog } from './../models/Blog';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // API: string = `http://localhost:3000/blogs`;
  API: string = `https://6210ab9f4cd3049e1781d501.mockapi.io/blog`;

  constructor(
    private http: HttpClient
  ) { }

  getBlog(id: any): Observable<TypeBlog> {
    return this.http.get<TypeBlog>(`${this.API}/${id}`)
  }
  listBlog(): Observable<TypeBlog[]> {
    return this.http.get<TypeBlog[]>(`${this.API}`);
  }
  addBlog(blog: TypeBlog): Observable<TypeBlog> {
    return this.http.post<TypeBlog>(`${this.API}`, blog);
  }
  updateBlog(blog: TypeBlog) {
    return this.http.put<TypeBlog>(`${this.API}/${blog.id}`, blog);
  }
  deleteBlog(id: number): Observable<TypeBlog> {
    return this.http.delete<TypeBlog>(`${this.API}/${id}`);
  }
}
