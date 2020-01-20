
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  url:string = 'src/app/login/login_data.json';
  constructor(private _http:HttpClient) { }
  getCredentials(){
    return this._http.get<Credentials[]>(this.url);
  }

}
interface Credentials{
  username:string;
  password:string;
}