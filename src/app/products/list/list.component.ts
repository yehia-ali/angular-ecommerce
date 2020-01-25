import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
