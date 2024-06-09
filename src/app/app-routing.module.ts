import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
          { path: '', component: DashboardComponent }, 
          { path: 'Dashboard', component: DashboardComponent }, 
          { path: 'kanbanBoard', component: KanbanBoardComponent }, 
          { path: 'settings', component: SettingsComponent }, 
          // { path: ':id', component: ProductDetailComponent }, 
        ]
   }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
