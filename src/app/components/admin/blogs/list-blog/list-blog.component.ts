import { TypeBlog } from './../../../../models/Blog';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {

  blogs!: TypeBlog[];

  constructor(
    private toastr: ToastrService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.listBlog();
  }
  listBlog() {
    this.blogService.listBlog().subscribe(data => {
      this.blogs = data;
    })
  }
  deleteBlog(id: number) {
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
    if (confirm) {
      this.blogService.deleteBlog(id).subscribe(() => {
        this.toastr.success("Bạn đã xóa thành công!");
        this.blogs = this.blogs.filter(item => item.id !== id);
      })
    }
  }
}
