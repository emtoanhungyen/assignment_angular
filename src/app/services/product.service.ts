import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeProduct } from '../models/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // API: string = `http://localhost:3000/products`;
  API: string = `https://6210ab9f4cd3049e1781d501.mockapi.io/products`;
  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: any): Observable<TypeProduct> {
    return this.http.get<TypeProduct>(`${this.API}/${id}`)
  }
  listProduct(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(`${this.API}`);
  }
  addProduct(product: TypeProduct): Observable<TypeProduct> {
    return this.http.post<TypeProduct>(`${this.API}`, product);
  }
  updateProduct(product: TypeProduct) {
    return this.http.put<TypeProduct>(`${this.API}/${product.id}`, product);
  }
  deleteProduct(id: number): Observable<TypeProduct> {
    return this.http.delete<TypeProduct>(`${this.API}/${id}`);
  }
}
