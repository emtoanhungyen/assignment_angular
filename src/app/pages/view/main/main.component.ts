import { Component, OnInit } from '@angular/core';
import { TypeProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products!: TypeProduct[];
    
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.listProduct();
  }

  listProduct(){
    this.productService.listProduct().subscribe(data => {
      this.products = data
    })
  }


}
