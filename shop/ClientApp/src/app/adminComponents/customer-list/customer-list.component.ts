import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from 'src/app/models/icustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customers: ICustomer[]; 

  ngOnInit() {
    this.customerService.get().subscribe(x => {this.customers = x;})
  }

}
