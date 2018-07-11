import { CartItems } from './cart-items';
import { Observable } from 'rxjs';

export class Cart {
  public id: number;
  public invoiceLines: CartItems;
}
