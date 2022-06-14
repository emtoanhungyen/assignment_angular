import { Component, OnInit } from '@angular/core';
import { TypeBlog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs!: TypeBlog[];

  constructor(
    private blogService: BlogService,

  ) { }

  ngOnInit(): void {
    this.listBlog();
  }
  listBlog() {
    this.blogService.listBlog().subscribe(data => {
      this.blogs = data;
    })
  }

}
