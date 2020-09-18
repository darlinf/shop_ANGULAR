import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegister } from 'src/app/models/iregister';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private authentication: AutorizacionService) { }

  rForm: FormGroup; 

  ngOnInit() {
    this.rForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      name: [null, Validators.required],
      image: null,
      currency: null,
      phone: null,
      addres: null
    });
  }

  registerForm(registerValue: IRegister){
    this.authentication.register(registerValue).subscribe(x => console.log(x),
    error => console.log(error))
  }


}
