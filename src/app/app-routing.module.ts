import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // 默认跳转页面..
  { path: '', pathMatch: 'full', redirectTo: '/pesticideProducts/index' },

  // 路由设置..
  { path: '', loadChildren: () => import('./pages/pesticide-products/pesticide-products.module').then(m => m.PesticideProductsModule) },
  { path: '', loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
