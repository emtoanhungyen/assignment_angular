import { Component, OnInit } from '@angular/core';
import { TypeProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user: any;
  products!: TypeProduct[];
    
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.listProduct();
  }

  listProduct(){
    this.productService.listProduct().subscribe(data => {
      this.products = data
    })
  }


}
