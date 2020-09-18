import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { IDashboard } from 'src/app/models/idashboard';
import { InvoiceService } from 'src/app/services/invoice.service';
import { IInvoiceDashboard } from 'src/app/models/iinvoiceDashboard';
import { ISales } from 'src/app/models/isales';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serviceAdmin: AdminService , private serviceInvoiceDashboard: InvoiceService) { }

  dashboard: IDashboard
  sales: ISales[];

  ngOnInit() {

    this.serviceInvoiceDashboard.getOrders().subscribe(x =>{this.sales = x})

    
    this.serviceInvoiceDashboard.getDashboar().subscribe( x =>{ this.dashboard = x; }
    ,error => console.error(error))
  }

}
