import { Injectable } from '@angular/core';
import { _projects } from '../Data-files/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects() {
    const jsonString = localStorage.getItem('_projects');
    if (jsonString) {
      return JSON.parse(jsonString);
    }

    const jsonStringProject = JSON.stringify(_projects);
    localStorage.setItem('_projects', jsonStringProject);
    return _projects;
  }
  AddProject(obj: any) {
    const projects = JSON.parse(localStorage.getItem('_projects') || '[]');
    if (obj._id == 0) {
      obj._id = this.getId();
      projects.push(obj);
    }
    else {
      projects[obj._id] = obj
    }
    localStorage.setItem('_projects', JSON.stringify(projects));

    return true;
  }
  projectId(id:any){
    let projects = this.getProjects()
    for(let p of projects){
      if(p._id == id){
        console.log(p);
        return p
      }
    }
    // return this.getProjects()[project]
  }
  getId() {
    const projects = JSON.parse(localStorage.getItem('_projects') || '[]');
    return (Number(projects.pop()?._id || 0)) + 1;
  }
}
