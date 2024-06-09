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
    this.createBarChart();
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
  createBarChart() {
    const ctx = document.getElementById('myBarChart') as HTMLCanvasElement;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['To Do Tickets', 'Progress Tickets', 'Done Tickets', ],
          datasets: [{
            label: 'Tickets',
            data: [69, 46, 93,],
            backgroundColor: ['#5030E5','#FFA500','#8BC48A'],
            borderColor: '#fff',
          }]
        },
        options: {
          scales: {
            y: {
              min: 10, // Set minimum value for the y-axis
              max: 100 // Set maximum value for the y-axis
            }
          }
          // Optional chart configuration options here
        }
      });
    }
  }

}
