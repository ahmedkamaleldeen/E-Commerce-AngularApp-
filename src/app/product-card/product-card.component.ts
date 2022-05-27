import { ProductsService } from './../services/products.service';
import { CounterService } from './../services/counter.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  counter: any;
  selectedProduct: any = [];
  constructor(
    private counterService: CounterService,
    private router: Router,
    private productService: ProductsService,
    private activatedRounte: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.counterService.getCounter().subscribe((counter) => {
      this.counter = counter;
    });
  }
  addToCart() {
    const id = this.activatedRounte.snapshot.params['id'];
    this.counterService.setCounter(++this.counter);
    this.productService.getProductDetails(id).subscribe((prod) => {
      this.product = prod;
    });
    this.productService.getProducts().subscribe((product) => {
      this.selectedProduct = product;
    });
    this.selectedProduct.push(this.product);
    console.log(this.selectedProduct);

    this.productService.setProducts(this.selectedProduct);
  }
  navigateToProductDetails() {
    this.router.navigate([`/product-details/${this.product.id}`]);
  }
}
