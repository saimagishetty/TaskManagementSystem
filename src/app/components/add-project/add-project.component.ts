import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/Services/Project-Services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  isVisible = false;
  myForm: any;

  projectForm: any;
  @Output() close = new EventEmitter<void>();
  @Input() editData:any


  constructor(private fb: FormBuilder,
    private ProjectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      _id: [0],
      projectName: ['', Validators.required],
      teamSize: [''],
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientContact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      projectStatus: ['', Validators.required],
      description: ['']
    });
  }
  ngOnChanges(){
    console.log(this.editData);
    if(this.editData){
      this.projectForm.patchValue(this.editData)
    }
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
      this.ProjectService.AddProject(this.projectForm.value)
      this.onClose()
    }
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal(event: any) {
    this.projectForm.reset()
    this.isVisible = false;
  }

  onClose() {
    this.close.emit();
    this.projectForm.reset()
    this.isVisible = false;
  }

}
