import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { TypeProduct } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products!: TypeProduct[];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // khởi chạy
    this.listProduct();
  }
  //khai báo
  listProduct() {
    this.productService.listProduct().subscribe(data => {
      this.products = data;
    })
  }
  deleteProduct(id: number) {
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.toastr.success("Bạn đã xóa thành công!");
        this.products = this.products.filter(item => item.id !== id);
      })
    }
  }
}
