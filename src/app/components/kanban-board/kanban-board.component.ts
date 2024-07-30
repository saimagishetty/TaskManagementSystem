import { Component } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project-Services/project.service';
import { TicketService } from 'src/app/Services/Ticket-Services/ticket.service'; 

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  columns = ["open", "in progress", "completed"]
  data: any
  currentItem: any
  projectsList: any
  _Project_Id: any
  _project: any

  constructor(
    private ProjectService: ProjectService,
    private TicketService: TicketService
  ) {
    this.projectsList = this.ProjectService.getProjects()
    this._Project_Id = this.defaultProject()
  }
  modelView: any;
  modelOpen = false;
  priorityLevel = ""
  ngOnInit() {
    console.log(this.TicketService.getTicketbyProjectId(this._Project_Id));
    this._project = this.ProjectService.projectId(this.defaultProject())
    if (this.priorityLevel.length == 0) {
      this.data = this.TicketService.getTicketbyProjectId(this._Project_Id);
    }
    else {
      let taskdata = this.TicketService.getTicketbyProjectId(this._Project_Id);
      this.data = this.filterTasksByPriority(taskdata, this.priorityLevel);
    }
    console.log(this.data);
  }
  filterTickets(status: string) {
    return this.data.filter((m: any) => m.status == status);
  }
  countColoum(status: string) {
    let x = this.data.filter((m: any) => m.status == status)
    return x.length;
  }
  onDragStart(item: any) {
    this.currentItem = item;
  }
  onDrop(event: any, status: string) {
    console.log('onDrop');
    event.preventDefault();
    const record = this.data.find((m: any) => m.id == this.currentItem.id);
    if (record != undefined) {
      record.status = status;
    }
    let submission = this.TicketService.addTask(this.currentItem)
    if (submission) {
      this.currentItem = null;
      this.ngOnInit()
    }

  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onOptionSelected(e: any) {
    this.priorityLevel = e.target.value
    this.ngOnInit()

  }
  filterTasksByPriority(tasks: any, priority: any) {
    return tasks.filter((task: any) => task.priority === priority);
  }
  defaultProject() {
    this._Project_Id = localStorage.getItem('_Project_Id') || (this.ProjectService.getProjects())[0]._id;
    localStorage.setItem('_Project_Id', this._Project_Id);
    console.log(this._Project_Id);
    return this._Project_Id
  }
  projectChanged(event: any): void {
    localStorage.setItem('_Project_Id', this._Project_Id = event);
    this.ngOnInit()
  }
}
