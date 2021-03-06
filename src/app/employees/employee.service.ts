import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

interface IDepartment {
    id: number;
    name: string;
}

export interface IEmployee {
    id: number;
    firstName: string;
    birthDate: Date;
    position: string;
    lastName?: string;
    department: IDepartment;
}

const DEPARTMENT_PMIS: IDepartment = {
    id: 10,
    name: "PMIS"
};

export const EMPLOYEES: IEmployee[] = [];


@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {
    }

    list() {
        return this._http.get('http://vcs.dev:81//api/students');
    }

    send(data) {
        return this._http.post('http://vcs.dev:81//api/send-form',data);
    }
}
