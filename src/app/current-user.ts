import { Customer } from 'src/app/customer';
import { Employee } from 'src/app/employee';
import { Admin } from 'src/app/admin';
import { User } from 'src/app/user';

export class CurrentUser {
    employee: Employee;
    customer: Customer;
    admin: Admin;
    role: string;
    user: User;
}
