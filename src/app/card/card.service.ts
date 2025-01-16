import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl: string = environment.apiUrl + '/card';

  constructor(private http: HttpClient) {
  }

  addToCard(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
  }

  getProductItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  clearCard(): Observable<void> {
    return this.http.delete<void>(this.apiUrl)
  }
}
