import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  apiUrl: string; 
  get():Observable<ICategory[]>{
    this.apiUrl = "api/Category";
    return this.http.get<ICategory[]>(this.baseUrl + this.apiUrl);
  }
  categoryFilter(id: number): Observable<ICategory[]>{
    this.apiUrl = "api/Category/GetCategoryAndProduct/";
    return this.http.get<ICategory[]>(this.baseUrl+this.apiUrl+id);
  }

  create(newCategory: ICategory){
    this.apiUrl="api/Category"
    return this.http.post(this.baseUrl+this.apiUrl, newCategory);
  }

  delete(id: number){
    this.apiUrl="api/Category"
    return this.http.delete(this.baseUrl+this.apiUrl+"/"+id);
  }

  edit(){
    //return this.http.post()
  }
}
