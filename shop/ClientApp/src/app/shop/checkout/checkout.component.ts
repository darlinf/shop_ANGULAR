import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICustomer } from '../../models/icustomer';
import { CustomerService } from '../../services/customer.service';
import { CartService } from '../../services/cart.service';
import { PuedeDesactivar } from '../../helpers/can-deactivate.guard';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, PuedeDesactivar{

  constructor(private cartService: CartService,
    private customerService: CustomerService ,
    ) { }

 productInCart: IProduct[];
 totals: number = 0;
 totalTotal: number = 0;
 orderDate: Date=new Date();
 customers: ICustomer[];
 
 paymentMethos: string;
 paymentStatus: string;
 discountForm: number;
 userId: number;

 ngOnInit() {
   this.customerService.get().subscribe(x =>  this.customers = x,
     error => console.error(error)
     )
   this.cartService.cartSubject.subscribe(x =>{
    
     this.sumTotals();
   }); this.productInCart =JSON.parse(localStorage.getItem('productCart'));
 }
 
 quantity(product: IProduct,maxMinus: string, index?: number){
   if(maxMinus == "max"){
     this.sumTotals(product.price);
     product.quantity=product.quantity+1;
     product.total = Math.round((product.total+product.price)*100)/100;
   }else{
     this.subtractTotal(product.price);
     product.quantity=product.quantity-1; 
     product.total = Math.round((product.total-product.price)*100)/100;
     if(product.quantity == 0){
       this.remove(index, product);
     }
   }
  
 }

 remove(index: number,product: IProduct, event?: Event){
   if(event){
     event.preventDefault();
     this.subtractTotal(product.price);
   }
   product.addToCart = false;
   this.productInCart.splice(index, 1);
  
 }

 clearCart(){
   this.productInCart.forEach( x => x.addToCart = false)
   this.productInCart.length = 0;
   this.totals = 0;
   localStorage.removeItem("productCart")
 }

 sumTotals(sumTotal?: number){
   let index = this.productInCart.length - 1;
   if(!sumTotal)
     sumTotal = this.productInCart[index].total;
   this.totals = Math.round((this.totals + sumTotal)*100)/100
 }

 subtractTotal(subtractTotal: number){
   let index = this.productInCart.length - 1;
   if(!subtractTotal)
     subtractTotal = this.productInCart[index].total;
   this.totals = Math.abs(Math.round((subtractTotal - this.totals)*100)/100);
 }

 
 permitirSalirDeRuta(): boolean | import("rxjs").Observable<boolean> | Promise<boolean> 
 {
   /*if (!this.mensaje || this.enviado){
     return true;
   }*/

   const confirmacion = window.confirm('¿Quieres salir del formulario y perder los cambios realizados?');
   return confirmacion;
 }
}
