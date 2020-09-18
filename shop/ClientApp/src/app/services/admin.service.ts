import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http :HttpClient, @Inject("BASE_URL") private baseUrl: string ) { }

  private apiUrl: string;
  getUserById(email: string){
    this.apiUrl = "api/Authenticater/"
    return this.http.get<any>(this.baseUrl + this.apiUrl + email)    
  }

  edit(){
    
  }
}
