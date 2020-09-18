import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInvoiceDashboard } from '../models/iinvoiceDashboard';
import { ISales } from '../models/isales';
import { IInvoice } from '../models/iinvoice';
import { IDashboard } from '../models/idashboard';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }


  apiUrl : string;
  getOrders():Observable<ISales[]>{
    this.apiUrl = "api/DashboardAdmin/orders";
    return this.http.get<ISales[]>(this.baseUrl+this.apiUrl);
  }
 
  getDashboar():Observable<IDashboard>{
    this.apiUrl = "api/DashboardAdmin/dashboard";
    return this.http.get<IDashboard>(this.baseUrl + this.apiUrl)
  }

  createInvoice(invoive: IInvoice[]){
    this.apiUrl ="api/Sales"
    return this.http.post( this.baseUrl+this.apiUrl,  invoive);
  }

}


