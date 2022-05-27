import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any;
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((products) => {
      this.productList = products;
    });
  }
}
