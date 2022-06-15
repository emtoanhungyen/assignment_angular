import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TypeProduct } from 'src/app/models/Products';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: TypeProduct = {
    name: '',
    price: 0,
    quantity: 0,
    img: '',
    status: true,
    desc: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute  ,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    }
  }

  onAdd() {

    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.updateProduct(this.product).subscribe(data => {
        this.toastr.success("Update thành công.")
        this.router.navigateByUrl('/admin/product');
      })
    }

    this.productService.addProduct(this.product).subscribe(data => {
      this.product = data
      this.toastr.success("Thêm thành công.");
      this.router.navigateByUrl('/admin/product');
    })
  }
}
