import { Injectable } from '@angular/core';

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

export const EMPLOYEES: IEmployee[] = [
  {
    id: 10,
    firstName: "Mustafa",
    lastName: "Wahrez",
    birthDate: new Date("1991-03-31"),
    position: "Software development assistant",
    department: DEPARTMENT_PMIS
  },
  {
    id: 13,
    firstName: "Waris",
    lastName: "Zamani",
    birthDate: new Date("1991-03-31"),
    position: "Software development assistant",
    department: DEPARTMENT_PMIS
  }, {
    id: 40,
    firstName: "Walid",
    lastName: "Waziri",
    birthDate: new Date("1991-03-31"),
    position: "Software development assistant",
    department: DEPARTMENT_PMIS
  },
  {
    id: 100,
    firstName: "Hashmatullah",
    lastName: "Faramarz",
    birthDate: new Date("1991-03-31"),
    position: "Software development assistant",
    department: {
      id: 1,
      name: "SD"
    }
  }
];


@Injectable()
export class EmployeeService {
}
