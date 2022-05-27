import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  selectedProducts: any = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.selectedProducts = products;
    });
  }
  removeProduct(id: any) {
    const products = this.selectedProducts.filter((product: any) => {return id !=product.id; });
    this.productService.setProducts(products);
  }
}
