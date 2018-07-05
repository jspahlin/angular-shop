import { Employee } from 'src/app/employee';

export class Admin extends Employee {
    supervisor: Admin;
    title: string;
}
