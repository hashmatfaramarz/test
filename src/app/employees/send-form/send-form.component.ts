import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-send-form',
    templateUrl: './send-form.component.html',
    styleUrls: ['./send-form.component.css']
})
export class SendFormComponent {
    data = {};
    id;

    constructor(private _employeeService: EmployeeService) {
    }

    sendData(EmployeeForm: NgForm) {
        this.data = EmployeeForm.value;
        this._employeeService.send(this.data).subscribe((data) => {
            this.id = data.json();
            console.log(this.id);
            this.data = {};
        });
    }
}
