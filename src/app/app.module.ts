import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UsersComponent } from './components/users/users.component';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    NavBarComponent,
    DashboardComponent,
    SettingsComponent,
    KanbanBoardComponent,
    ProjectsComponent,
    UsersComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
