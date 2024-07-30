import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ProjectService } from 'src/app/Services/Project-Services/project.service';
import { TicketService } from 'src/app/Services/Ticket-Services/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  projectsList:any
  data:any

  constructor(
    private ProjectService: ProjectService,
    private TicketService : TicketService
  ) { }

  ngOnInit(): void {
    this.data = this.TicketService.getTickets();
    this.projectsList = this.ProjectService.getProjects()
    console.log(this.projectsList);
    this.createPieChart();
    this.createBarChart();
  }
  countColoum(status: string) {
    let x = this.data.filter((m: any) => m.status == status)
    return x.length;
  }

  createPieChart() {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['To Do Tickets', 'Progress Tickets','Done Tickets'],
          datasets: [{
            data: [this.countColoum('open'), this.countColoum('in progress'), this.countColoum('completed')],
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
            data: [this.countColoum('open'), this.countColoum('in progress'), this.countColoum('completed')],
            backgroundColor: ['#5030E5','#FFA500','#8BC48A'],
            borderColor: '#fff',
          }]
        },
        options: {
          scales: {
            y: {
              min: 0, // Set minimum value for the y-axis
              max: (this.data.length * 1.1) // Set maximum value for the y-axis
            }
          }
          // Optional chart configuration options here
        }
      });
    }
  }

}
