import { TypeBlog } from './../../../../models/Blog';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blog: TypeBlog = {
    title: '',
    desc: ''
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
  }

  onAdd() {

    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.blogService.updateBlog(this.blog).subscribe(data => {
        this.toastr.success("Update thành công.")
        this.router.navigateByUrl('/admin/blog');
      })
    }

    this.blogService.addBlog(this.blog).subscribe(data => {
      this.blog = data
      this.toastr.success("Thêm thành công.");
      this.router.navigateByUrl('/admin/blog');
    })
  }
}
