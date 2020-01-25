import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  quantity: number = 0;
  @Input() product: Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  increaseQuantity() {
    this.quantity++;
    const p = this.getCurrentProduct();
    if (p) {
      this.productsService.increaseQuantityFromCart(this.product);
    } else {
      this.productsService.addToCart(this.product, this.quantity);
    }
  }
  decreaseQuantity() {
    this.quantity--;
    const p = this.getCurrentProduct();
    if (this.quantity < 1) {
      this.productsService.removeFromCart(this.product);
    } else {
      this.productsService.decreaseQuantityFromCart(this.product);
    }
  }

  getCurrentProduct() {
    return this.productsService.selectedProducts.find(
      el => el.product === this.product
    );
  }
}
