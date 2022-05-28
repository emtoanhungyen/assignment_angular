import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/admin/products/add-product/add-product.component';
import { ListProductComponent } from './components/admin/products/list-product/list-product.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';

const routes: Routes = [
  { path: '', component: HomeAdminComponent },
  {
    path: 'product', component: ListProductComponent,
    children: [
      {path:'add', component: AddProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
