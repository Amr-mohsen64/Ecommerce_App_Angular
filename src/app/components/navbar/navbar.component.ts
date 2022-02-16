import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpend: boolean = false;
  isUser: boolean = false;


  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.authServ.user.subscribe((user: any) => {
      if (user) {
        this.isUser = true
        this.authServ.userId = user.uid
      }
      else {
        this.isUser = false
        this.authServ.userId = ""
      }
    })
  }

  toggleNavbar() {
    this.isOpend = !this.isOpend
  }

  logOut() {
    this.authServ.logOut().then(() => console.log('out')
    )
  }

}
