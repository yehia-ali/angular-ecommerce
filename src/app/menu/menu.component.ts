import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG } from '../shared';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(name: string) {
    switch (name) {
      case 'products':
        // navigate to products
        this.router.navigate([CONFIG.products.route]);
        break;
      case 'shopping':
        // navigate to shopping
        this.router.navigate([CONFIG.shoppingCart.route]);
        break;
    }
  }

}
