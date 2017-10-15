import { EmployeeService } from './employees/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './employees/list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './employees/view/view.component';
import { SendFormComponent } from './employees/send-form/send-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DashboardComponent,
    ViewComponent,
    SendFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: 'employees/list',
        component: ListComponent
      }, {
        path: 'employees/:id',
        component: ViewComponent
      },{
        path:'send-form',
        component:SendFormComponent,
      }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]),
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
