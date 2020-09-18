import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  
  constructor(
    private autorizacionService: AutorizacionService,
    private route: Router,
    private cartService: CartService
    ){
      this.autorizacionService.currentUser.subscribe(x => {
        if(x)
          this.userType = x.role;
        else{
          this.userType = ""
          this.aside = false;
        }
        this.roleNav()
      })
  }

  isExpanded = false;
  userType: string;
  aside = false;
  incart = 0

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  
  ngOnInit(): void { 
    this.cartService.cartSubject.subscribe(x => {
      this.incart = x.length
    })
  }

  roleNav(){
      if(this.userType == 'User' || this.userType == 'Admin'){
      this.aside = true;
    }
  }
  
}
