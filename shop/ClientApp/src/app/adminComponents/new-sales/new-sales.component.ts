import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/models/iproduct';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/app/models/icustomer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice.service';
import { IInvoice } from 'src/app/models/iinvoice';

@Component({
  selector: 'app-new-sales',
  templateUrl: './new-sales.component.html',
  styleUrls: ['./new-sales.component.css']
})
export class NewSalesComponent implements OnInit {

  constructor(private cartService: CartService,
     private customerService: CustomerService ,
     private fb: FormBuilder,
     private invoiceService: InvoiceService
     ) { }

  productInCart: IProduct[];
  totals: number = 0;
  totalTotal: number = 0;
  orderDate: Date=new Date();
  customers: ICustomer[];
  rForm: Array<FormGroup>=[]; 
  invoices: Array<IInvoice>=[]; 
  
  paymentMethos: string;
  paymentStatus: string;
  discountForm: number;
  userId: number;

  ngOnInit() {
    this.customerService.get().subscribe(x =>  this.customers = x,
      error => console.error(error)
      )
    this.cartService.cartSubject.subscribe(x =>{
      this.productInCart = x;
      this.sumTotals();
    });
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

  discount(value){
    this.discountForm = value;
    this.totalTotal = Math.round((this.totals - (value/this.totals)*100)*100)/100
  }

  generateInvoices(){
    this.productInCart.forEach((product, index) => {
      this.rForm.push (this.fb.group({
        item: product.name,
       // date: this.orderDate,
        quantity: product.quantity,
        paymentStatus: this.paymentStatus,
        paymentMethos: this.paymentMethos,
        unitCost: product.price,
        amount: 12,
        discount: parseInt(''+this.discountForm),
        totalAmount: product.total,
        userId: parseInt(''+this.userId)
      })
      )
    })

    this.invoices.length = 0;
    this.rForm.forEach(x=>this.invoices.push(x.value))

    console.log(this.invoices)

    this.invoiceService.createInvoice(this.invoices).subscribe(x => {}, error => console.log(error))

  }

}
