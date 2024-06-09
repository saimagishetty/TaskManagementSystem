import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  constructor(private router: Router) {
    let _url = this.router.url.split('/')[1];
    this.current = this.items.findIndex(item => item.url === _url);
  }

  current: any
  items = [
    {
      url: "Dashboard",
      icon: "fa-solid fa-house-chimney",
      name: "Home"
    },
    {
      url: "KanbanBoard",
      icon: "fa-solid fa-tv",
      name: "KanbanBoard"
    },
    {
      url: "Projects",
      icon: "fa-solid fa-diagram-project",
      name: "Projects"
    },
    {
      url: "Users",
      icon: "fa-solid fa-user-group",
      name: "Users"
    },
    {
      url: "Settings",
      icon: "fa-solid fa-gear",
      name: "Settings"
    }

  ]
  ngDoCheck() {
    let _url = this.router.url.split('/')[1];
    this.current = this.items.findIndex(item => item.url === _url);
  }




  ngOnInit() {
  }
}
