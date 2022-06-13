import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('user');
    this.toastr.success("Đăng xuất thành công");
    return this.router.navigateByUrl("/");
    // window.location.reload();
  }
}
