import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/login';
import { Observable, BehaviorSubject } from 'rxjs';
import { IRegister } from '../models/iregister';
import { ILoginResurt } from '../models/iloginResurt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService{

   private currentUserSubject: BehaviorSubject<ILoginResurt>;
    public currentUser: Observable<ILoginResurt>;

  constructor( private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
        this.currentUserSubject = new BehaviorSubject<ILoginResurt>(JSON.parse(localStorage.getItem("currentUser")));
         this.currentUser = this.currentUserSubject.asObservable();
    }
  loginResurt: ILoginResurt;

  private apiUrl: string;
  login(login: ILogin){
    this.apiUrl ="api/Authenticater/authenticate";
    return this.http.post<ILoginResurt>(this.baseUrl+this.apiUrl, login).pipe(map(
              user =>{
              localStorage.setItem("currentUser", JSON.stringify(user));
              this.currentUserSubject.next(user);
    }))
  }

  logout(){
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): ILoginResurt {
    return this.currentUserSubject.value;
  }
  
  getImageUser(email: string):Observable<any>{
    this.apiUrl="api/Authenticater/GetImagenUser";
    return this.http.post<any>(this.baseUrl+this.apiUrl, {"Email" : email});
  }

  register(registerValue: IRegister){
    this.apiUrl="api/Authenticater/Register";
    return this.http.post<IRegister>(this.baseUrl+this.apiUrl, registerValue);
  }
}
