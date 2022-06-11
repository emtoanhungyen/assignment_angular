import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: IUser = {
    name: "",
    email: "",
    password: ""
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSignup() {
    this.userService.addUser(this.user).subscribe(data => {
      if (data) {
        this.toastr.success("Đăng ký thành công!", "chào bạn");
        setTimeout(() => {
          this.router.navigateByUrl("/");
        }, 1000)
      }
      this.toastr.error("Đăng ký thất bại!");
      this.router.navigateByUrl("/signup");
    })

  }
}
