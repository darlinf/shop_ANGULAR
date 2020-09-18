import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';
import { ICustomer } from '../models/icustomer';
import { IDasboardUser } from '../models/idashboardUser';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  apiUrl: string;

  get():Observable<ICustomer[]>{
    this.apiUrl = "api/Customer"
    return this.http.get<ICustomer[]>(this.baseUrl + this.apiUrl);
  }

  getDashboard(id: number){
    this.apiUrl = "api/DashboardCustomer/GetDashboard/";
    return this.http.get<IDasboardUser>(this.baseUrl + this.apiUrl + id)
  }

  getOrders(id: number){
    this.apiUrl = "api/DashboardCustomer/GetOrders/";
    return this.http.get<any>(this.baseUrl + this.apiUrl + id)
  }
}
