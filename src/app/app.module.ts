import { EmployeeService } from './employees/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './employees/list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './employees/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DashboardComponent,
    ViewComponent
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
      }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
