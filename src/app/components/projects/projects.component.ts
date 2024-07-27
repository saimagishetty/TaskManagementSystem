import { Component, ViewChild } from '@angular/core';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectService } from 'src/app/Services/Project-Services/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @ViewChild('modal') modal!: AddProjectComponent; 
  projectsList:any
  _editData:any

  constructor(
    private ProjectService: ProjectService
  ) { }
  ngOnInit() {
    this.projectsList = this.ProjectService.getProjects()
    console.log(this.projectsList);
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
