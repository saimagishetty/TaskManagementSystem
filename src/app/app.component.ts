import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskManagementSystem';
  defaultData = [
    {
      "title": "Make UI Screems",
      "description": "Complete this task by the end of the day.",
      "priority": "high",
      "status": "in progress",
      "id": "1",
      "due_date": "2024-01-10"
    },
    {
      "title": "Make Integerations",
      "description": "Research new marketing strategies.",
      "priority": "medium",
      "status": "in progress",
      "id": "2",
      "due_date": "2024-01-15"
    },
    {
      "title": "complete backend",
      "description": "Prepare for the upcoming meeting.",
      "priority": "low",
      "status": "completed",
      "id": "3",
      "due_date": "2024-01-09"
    },
    {
      "title": "Install packages",
      "description": "Send an email to the client.",
      "priority": "high",
      "status": "completed",
      "id": "4",
      "due_date": "2024-01-12"
    },
    {
      "title": "Attend the meeting",
      "description": "Update the project documentation.",
      "priority": "medium",
      "status": "in progress",
      "id": "5",
      "due_date": "2024-01-17"
    },
    {
      "title": "Review project requirements",
      "description": "Discuss with the team to clarify any ambiguities.",
      "priority": "medium",
      "status": "open",
      "id": "6",
      "due_date": "2024-01-14"
    },
    {
      "title": "Test new feature",
      "description": "Create test cases and execute testing.",
      "priority": "high",
      "status": "open",
      "id": "7",
      "due_date": "2024-01-16"
    },
    {
      "title": "Finalize design mockups",
      "description": "Get client approval on design changes.",
      "priority": "medium",
      "status": "open",
      "id": "8",
      "due_date": "2024-01-18"
    },
    {
      "title": "Deploy latest release",
      "description": "Coordinate with DevOps team for deployment.",
      "priority": "high",
      "status": "open",
      "id": "9",
      "due_date": "2024-01-20"
    }
  ]

  ngOnInit() {
    const storedData = localStorage.getItem("task-data");
    if (storedData) {
      // nothing happens
    }
    else {
      const jsonData = JSON.stringify(this.defaultData);
      localStorage.setItem("task-data", jsonData);
    }
  }
}
