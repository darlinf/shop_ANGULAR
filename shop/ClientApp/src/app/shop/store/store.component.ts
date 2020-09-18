import { Component, OnInit, Host } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ICategory } from '../../models/icategory';
import { AppComponent } from '../../app.component';
import { IProduct } from '../../models/iproduct';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    private productService: ProductService,private cartService: CartService) { }
  
  categoryAndProduct: ICategory[];
  productCart: Array<IProduct>=[]; 
  filterValue: string;

  ngOnInit() {
  
    this.productService.getProductAndService().subscribe( x => 
      {this.categoryAndProduct = x;},error => console.error(error));
  }

  addToCart(cart: IProduct, add: boolean){
    cart.quantity = 1;
    cart.total = cart.price;
    cart.addToCart = add;
    this.productCart.push(cart);
    this.cartService.addCard(this.productCart)
    
  }

  handlerSearch(value){
    this.filterValue = value;
  }

}
