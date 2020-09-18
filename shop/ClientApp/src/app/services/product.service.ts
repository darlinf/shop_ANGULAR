import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl: string) { }

  product: IProduct[];

  urlApi: string;
  get(): Observable<IProduct[]>{this.urlApi = "api/Product";
    return this.http.get<IProduct[]>(this.baseUrl + this.urlApi);
  }

  getProductAndService():Observable<ICategory[]>{
    this.urlApi = "api/Category/GetCategoryAndProduct";
    return this.http.get<ICategory[]>(this.baseUrl + this.urlApi)
  }

  delete(id: number): Observable<IProduct>{
    this.urlApi = "api/Product";
    return this.http.delete<IProduct>(this.baseUrl+this.urlApi+'/'+id);
  }

  
  create(item: IProduct){
    this.urlApi = "api/Product";
    return this.http.post(this.baseUrl+this.urlApi, item);
}
}
