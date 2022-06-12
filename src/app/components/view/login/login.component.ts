import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: IUser = {
    email: '',
    password: ''
  }
  checkEmail: any;
  checkPassword: any;

  user: any;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.login);
    this.userService.getEmail(this.login.email).subscribe(data => {
      this.user = data;
      if (this.user[0] === undefined) {
        this.toastr.error("Email không tồn tại!");
      } else {
        if (this.user[0].password !== this.login.password) {
          this.toastr.error("Mật khẩu không chính xác");
        }
        if (this.user[0].role === 0) {
          localStorage.setItem('user', JSON.stringify(this.user[0]));
          this.router.navigateByUrl("/");
          this.toastr.success("Đăng nhập thành công");
        }
        if (this.user[0].role === 1) {
          localStorage.setItem('admin', JSON.stringify(this.user[0]));
          this.router.navigateByUrl("/");
          this.toastr.success("Đăng nhập thành công");
        }
      }
    })
  }
}
