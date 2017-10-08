import { Component } from '@angular/core';
import { IEmployee, EMPLOYEES } from '../employee.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  employees: IEmployee[] = EMPLOYEES;
}
