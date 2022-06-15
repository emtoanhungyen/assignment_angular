import { TypeBlog } from './../../../models/Blog';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { BlogService } from 'src/app/services/blog.service';
import { TypeProduct } from 'src/app/models/product';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: any;
  products!: TypeProduct[];
  blogs!: TypeBlog[];  
  constructor(
    private productService: ProductService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.listProduct();
    this.listBlog();
  }

  listProduct(){
    this.productService.listProduct().subscribe(data => {
      this.products = data
    })
  }
  listBlog() {
    this.blogService.listBlog().subscribe(data => {
      this.blogs = data
    })
  }


}
