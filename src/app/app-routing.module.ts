import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'TaskManagementSystem', component: MainComponent,
    children: [
          { path: 'Dashboard', component: DashboardComponent }, 
          { path: 'KanbanBoard', component: KanbanBoardComponent },
          { path: 'KanbanBoard/:id', component: KanbanBoardComponent },
          { path: 'Projects', component: ProjectsComponent },
          { path: 'Users', component: UsersComponent },  
          { path: 'Settings', component: SettingsComponent }, 
        ]
   },
   { path: '**', redirectTo: '/TaskManagementSystem/Dashboard' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
