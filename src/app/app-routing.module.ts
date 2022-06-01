import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/admin/products/add-product/add-product.component';
import { ListProductComponent } from './components/admin/products/list-product/list-product.component';
import { LoginComponent } from './components/admin/users/login/login.component';
import { SignupComponent } from './components/admin/users/signup/signup.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { HomeComponent } from './pages/view/home/home.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', component: HomeAdminComponent,
    children: [
      { path: 'product', component:ListProductComponent},
      { path: 'product/add', component:AddProductComponent},
      { path: 'product/edit/:id', component: AddProductComponent}
    ],
    canActivate: [AuthGuard]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
