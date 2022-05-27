import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
product =new BehaviorSubject([]);
  constructor(private http:HttpClient) {
   }
   getProductList(){
     return this.http.get('https://fakestoreapi.com/products');
   }
   getProductDetails(id:any){
     return this.http.get(`https://fakestoreapi.com/products/${id}`);
   }
   getProducts(){
     return this.product;
   }
   setProducts(newProduct:any){
     this.product.next(newProduct);
   }

}
