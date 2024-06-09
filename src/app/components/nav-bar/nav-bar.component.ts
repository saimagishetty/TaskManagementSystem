import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  currentTime: any;
  private subscription: any;

  ngOnInit() {
    this.currentTime = new Date();
    this.subscription = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}
