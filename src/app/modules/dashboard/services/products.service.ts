import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "http://localhost:8000";


  constructor(private http: HttpClient) { }

  getProducts(products: any){
    return this.http.get(`${this.baseUrl}/${products}`)
  }

}
