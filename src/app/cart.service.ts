import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items: Product[] = [];

   addToCarts(product: Product){
     this.items.push(product);
   }
   getItems(){
     return this.items;
   }
   clearChart(){
     this.items = [];
     return this.items;
   }
   getshippingPrices(){
     return this.http.get<{username: string, password: String}[]> ('http://127.0.0.1:5000/api/LoginInfo');
   }

  constructor(private http: HttpClient) { 
    
  }
}
