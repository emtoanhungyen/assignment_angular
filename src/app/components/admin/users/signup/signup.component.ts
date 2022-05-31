import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : IUser = {
    name: "",
    email: "",
    password: ""
  };
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSignup() {
    this.userService.addUser(this.user).subscribe(data => {
      // localStorage.setItem('user')
    })

  }
  
}
