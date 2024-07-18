import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router: Router) {
  }

  current: any
  items = [
    {
      url: "/TaskManagementSystem/Dashboard",
      icon: "fa-solid fa-house-chimney",
      name: "Home"
    },
    {
      url: "/TaskManagementSystem/KanbanBoard",
      icon: "fa-solid fa-tv",
      name: "KanbanBoard"
    },
    {
      url: "/TaskManagementSystem/Projects",
      icon: "fa-solid fa-diagram-project",
      name: "Projects"
    },
    {
      url: "/TaskManagementSystem/Users",
      icon: "fa-solid fa-user-group",
      name: "Users"
    },
    {
      url: "/TaskManagementSystem/Settings",
      icon: "fa-solid fa-gear",
      name: "Settings"
    }
  ]
  ngOnInit() {
  }
}
