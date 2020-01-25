import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CONFIG } from './shared';


const routes: Routes = [
  { path: '', pathMatch: 'full',loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: CONFIG.home.name, component: HomeComponent },
  {
    path: CONFIG.products.name,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: '**', redirectTo: CONFIG.home.route }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
