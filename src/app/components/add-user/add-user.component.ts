import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User-Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  isVisible = false;
  myForm: any;

  userForm: any;
  @Output() close = new EventEmitter<void>();
  @Input() editData:any


  constructor(
    private fb: FormBuilder,
    private UserService: UserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      _id: [0],
      userName: ['', Validators.required],
      teamSize: [''],
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientContact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      userStatus: ['', Validators.required],
      description: ['']
    });
  }
  ngOnChanges(){
    console.log(this.editData);
    if(this.editData){
      this.userForm.patchValue(this.editData)
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.UserService.Adduser(this.userForm.value)
      this.onClose()
    }
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal(event: any) {
    this.userForm.reset()
    this.isVisible = false;
  }

  onClose() {
    this.close.emit();
    this.userForm.reset()
    this.isVisible = false;
  }

}
