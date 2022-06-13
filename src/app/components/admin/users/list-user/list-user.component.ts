import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users!: IUser[];
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.listUser();
  }

  listUser() {
    this.userService.listUser().subscribe(data => {
      this.users = data
    })
  }
  deleteUser(id: number) {
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
    if (confirm) {
      this.userService.deleteUser(id).subscribe(() => {
        this.toastr.success("Bạn đã xóa thàn công!");
        this.users = this.users.filter(item => item.id !== id);
      })
    }
  }
}
