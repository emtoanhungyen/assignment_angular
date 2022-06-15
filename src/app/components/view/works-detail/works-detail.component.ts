import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { TypeProduct } from 'src/app/models/Products';
@Component({
  selector: 'app-works-detail',
  templateUrl: './works-detail.component.html',
  styleUrls: ['./works-detail.component.css']
})
export class WorksDetailComponent implements OnInit {

  product!: TypeProduct;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    const id = this.router.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(data => {
      this.product = data;
    })
  }

  ngOnInit(): void {
  }



}
