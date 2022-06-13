import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/admin/products/add-product/add-product.component';
import { ListProductComponent } from './components/admin/products/list-product/list-product.component';
import { ListUserComponent } from './components/admin/users/list-user/list-user.component';
import { BlogComponent } from './components/view/blog/blog.component';
import { LoginComponent } from './components/view/login/login.component';
import { SignupComponent } from './components/view/signup/signup.component';
import { WorksDetailComponent } from './components/view/works-detail/works-detail.component';
import { WorksComponent } from './components/view/works/works.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { Page404Component } from './pages/page404/page404.component';
import { HomeComponent } from './pages/view/home/home.component';
import { MainComponent } from './pages/view/main/main.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: MainComponent},
      { path: 'blog', component: BlogComponent },
      { path: 'works', component: WorksComponent },
      { path: 'works_detail', component: WorksDetailComponent }
    ]
  },
  {
    path: 'admin', component: HomeAdminComponent,
    children: [
      { path: 'product', component: ListProductComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/edit/:id', component: AddProductComponent },
      { path: 'user', component: ListUserComponent}
    ],
    canActivate: [AuthGuard]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
