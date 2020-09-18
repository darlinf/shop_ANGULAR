import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private adminService: AdminService, 
    private autorizacionService: AutorizacionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {   
    
    this.autorizacionService.currentUser.subscribe(user => {
      this.adminService.getUserById(user.email).subscribe(x => {
        this.user = x;
      })
    })
    this.rForm = this.fb.group({
      name:[""],
      email:[""],
      phone:[""],
      currency:[""],
      website:[""],
      addres:[""],
    })
  }
  update(rForm: any){
    console.log(rForm)
  }

  rForm: FormGroup;
  user: any;
}
