import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  tabs = [
    { title: 'Tab 1' },
    { title: 'Tab 2' },
    { title: 'Tab 3' }
  ];

  selectedTab: number = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }

}
