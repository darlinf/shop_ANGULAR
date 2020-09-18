import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISales } from '../models/isales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) { }

  apiUrl: string;

  get(): Observable<ISales[]>{
    this.apiUrl = "api/sales";
    return this.http.get<ISales[]>(this.baseUrl+this.apiUrl);
  }
}
