import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor() { }

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['To Do Tickets', 'Progress Tickets','Done Tickets'],
          datasets: [{
            data: [40, 90,55],
            backgroundColor: ['#5030E5','#FFA500','#8BC48A'],
            borderColor: '#fff',
          }]
        },
        options: {}
      });
    }
  }

}
