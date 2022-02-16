import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMsg: string = ''
  constructor(private authServ: AuthService
    , private userServ: UserService
    , private router: Router) { }

  ngOnInit(): void {
  }

  signup(form: any) {
    let data: User = form.value;
    this.authServ.signUp(data.email, data.password).then((result: any) => {
      this.errorMsg = ''
      this.userServ.addNewUser(result.user.uid, data.name, data.address).then(() => {
        this.router.navigate(['/'])
      }).catch(err => console.log(err))
    })
      .catch((err: any) => {
        this.errorMsg = err.message
      })
    // console.log(data);

  }




}
