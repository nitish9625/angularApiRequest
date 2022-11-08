import { Component, OnInit } from '@angular/core';
import { AleryfyService } from '../services/aleryfy.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedinuser : any;


  constructor(private alertyfy: AleryfyService) { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinuser =  localStorage.getItem('token');
    return this.loggedinuser;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertyfy.success("You are logged out !");
  }

}
