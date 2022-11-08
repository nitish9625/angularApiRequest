import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AleryfyService } from 'src/app/services/aleryfy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertyfy: AleryfyService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertyfy.success("Login Successful");
      this.router.navigate(['/']);
    }else{
      this.alertyfy.error("User id or password is wrong");
    }
  }

}
