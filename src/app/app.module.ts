import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//improt component
import { HeaderAdminComponent } from './pages/admin/header-admin/header-admin.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { FooterAdminComponent } from './pages/admin/footer-admin/footer-admin.component';
import { SiderAdminComponent } from './pages/admin/sider-admin/sider-admin.component';
import { AddProductComponent } from './components/admin/products/add-product/add-product.component';
import { ListProductComponent } from './components/admin/products/list-product/list-product.component';
import { DetailProductComponent } from './components/admin/products/detail-product/detail-product.component';
//improt antd
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { HomeComponent } from './pages/view/home/home.component';
import { HeaderComponent } from './pages/view/header/header.component';
import { FooterComponent } from './pages/view/footer/footer.component';
import { MainComponent } from './pages/view/main/main.component';
import { BlogComponent } from './components/view/blog/blog.component';
import { WorksComponent } from './components/view/works/works.component';
import { WorksDetailComponent } from './components/view/works-detail/works-detail.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignupComponent } from './components/view/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/view/login/login.component';
import { ListUserComponent } from './components/admin/users/list-user/list-user.component';
import { AddUserComponent } from './components/admin/users/add-user/add-user.component';
import { AddBlogComponent } from './components/admin/blogs/add-blog/add-blog.component';
import { ListBlogComponent } from './components/admin/blogs/list-blog/list-blog.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    HomeAdminComponent,
    FooterAdminComponent,
    SiderAdminComponent,
    AddProductComponent,
    ListProductComponent,
    DetailProductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BlogComponent,
    WorksComponent,
    WorksDetailComponent,
    Page404Component,
    SignupComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    AddBlogComponent,
    ListBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
