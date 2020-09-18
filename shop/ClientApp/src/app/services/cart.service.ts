import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public cartSubject: Subject<IProduct[]> = new Subject();

  addCard(productCart: IProduct[]){
    this.cartSubject.next(productCart)
    localStorage.setItem('productCart',JSON.stringify(productCart))
  }


}
