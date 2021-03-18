import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PesticideProductsListComponent } from './pesticide-products-list/pesticide-products-list.component';
import { PesticideProductsEditComponent } from './pesticide-products-edit/pesticide-products-edit.component';


const routes: Routes = [{
  path: 'pesticideProducts',
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    { path: 'index', component: PesticideProductsListComponent },
    { path: 'edit', component: PesticideProductsEditComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesticideProductsRoutingModule { }
