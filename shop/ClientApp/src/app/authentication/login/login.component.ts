import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../models/login';
import { ILoginResurt } from 'src/app/models/iloginResurt';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rForm: FormGroup;
  imageUser: string;
  loginResurt: ILoginResurt;

  constructor(
    private autorizacionService: AutorizacionService,
    private fb: FormBuilder,
    private route: Router
    ) { 
   
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login(valueLogin: ILogin){
    this.submitted = true;
    this.autorizacionService.login(valueLogin)
    .pipe(first())
    .subscribe(
      data => { 
        let role = this.autorizacionService.currentUserValue.role
        if(role == "User")
          this.route.navigate(["/DashboardUser"]);
        else
          this.route.navigate(["/Dashboard"]);
      },
      error => {
        this.error = "Username or password is incorrect"; 
        this.loading = false;
      });
  }
  error = ''
  loading: boolean
  submitted = false;

  getImageUser(valueLogin: ILogin){
    this.autorizacionService.getImageUser(valueLogin.email).subscribe(
      x => this.imageUser = x.imageUrl , error => console.error(error))
  }


 

}
