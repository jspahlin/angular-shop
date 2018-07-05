import { User } from 'src/app/user';
import { Address } from './address';


export class Customer extends User {
    address: Address;
}
