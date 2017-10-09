import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Response} from '@angular/http';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // employees: IEmployee[] = EMPLOYEES;
  employees;
  constructor(private _employeeService: EmployeeService) {
    let outerThis = this;
    this._employeeService.list().subscribe(function (data: Response) {
      outerThis.employees = data.json();
    });
  }
}
