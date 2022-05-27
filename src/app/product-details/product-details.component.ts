import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product:any;
  constructor(private productService:ProductsService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.productService.getProductDetails(id).subscribe(product=>{this.product=product});
  }

}
