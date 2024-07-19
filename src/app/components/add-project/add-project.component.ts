import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  isVisible = false;
  myForm: any;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal(event: any) {
    this.myForm.reset()
    this.isVisible = false;
  }

}
