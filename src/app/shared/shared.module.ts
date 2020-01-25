import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [FilterPipe, AddToCartComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FilterPipe, AddToCartComponent]
})
export class SharedModule { }
