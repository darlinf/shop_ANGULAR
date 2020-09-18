import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

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
  ngOnInit() {
  }

  logout(){
    this.autorizacionService.logout();
    this.route.navigate(["/store"])
  }



  //style="background-image: url(https://www.atomix.com.au/media/2015/06/atomix_user31.png);"
}
