import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  constructor(
    private autorizacionService: AutorizacionService,
    private route: Router
  ) {
    
    this.autorizacionService.currentUser.subscribe(x => {
      if(x)
        this.imageUser = x.image;
    })
  }
  imageUser: string;
  //https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png


  ngOnInit() {
  }

  
  logout(e: Event){
    e.preventDefault();
    this.autorizacionService.logout();
    this.route.navigate(["/store"])
  }
}
