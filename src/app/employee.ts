import { User } from 'src/app/user';

export class Employee extends User {
    supervisor: Employee;
    title: string;
}
