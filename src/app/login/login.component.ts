import { Component, OnInit } from '@angular/core';
import {LoginService,Credentials} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:Credentials[]
  constructor(private _login_service: LoginService) {
    _login_service.getCredentials().subscribe(this.setData);
   }
   
  setData(data){
    this.data=data;
  }
  

  ngOnInit() {
  }

}