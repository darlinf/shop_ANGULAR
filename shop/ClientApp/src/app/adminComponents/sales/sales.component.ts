import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { ISales } from 'src/app/models/isales';
import { PaginatorComponent } from 'src/app/shop/paginator/paginator.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private saleService: SalesService) { }

  sales: ISales[];

  ngOnInit() {
    this.saleService.get().subscribe(x =>{ this.sales = x; }, 
      error => console.error(error));
  }

  page_size: number = 3;
  page_number: number = 1;


  handlerPage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number =e.pageIndex + 1
  }
}
