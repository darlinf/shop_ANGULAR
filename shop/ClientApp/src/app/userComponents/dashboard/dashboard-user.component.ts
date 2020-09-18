import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { IDasboardUser } from 'src/app/models/idashboardUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponentUser implements OnInit {

  constructor(private customerService: CustomerService) { }

  dashboard: IDasboardUser;
  sales: any[]

  ngOnInit() {
    this.customerService.getDashboard(1002).subscribe(x => {
      this.dashboard = x;
    })

    this.customerService.getOrders(1002).subscribe(x => {
      this.sales = x
    })
  }

}
