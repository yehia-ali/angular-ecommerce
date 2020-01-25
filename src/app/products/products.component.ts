import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.isError = false;
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
        this.isError = true;
      }
    );
    
  }

}
