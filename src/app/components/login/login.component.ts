import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string = ''

  constructor(private authServ: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(form: any) {
    let data = form.value
    this.authServ.login(data.email, data.password).then((result) => {
      this.router.navigate(['/'])
    }).catch((err: any) => {
      this.errorMsg = err.message
    })
  }

}
