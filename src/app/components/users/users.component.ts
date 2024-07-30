import { Component, ViewChild } from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserService } from 'src/app/Services/User-Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @ViewChild('modal') modal!: AddUserComponent; 
  usersList:any
  _editData:any

  constructor(
    private UserService: UserService
  ) { }
  ngOnInit() {
    this.usersList = this.UserService.getusers()
    console.log(this.usersList);
  }


  onModalClose() {
    this._editData=null
    this.ngOnInit()
  }
  editData(e:any){
    this._editData=e
    this.modal.openModal()
  }

}
