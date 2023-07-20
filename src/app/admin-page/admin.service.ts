import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Injectable, OnInit} from "@angular/core";
import {environment} from "../../environment/environment";
import {UserLoginPassword} from "../models/UserLoginPassword";
import {Observable} from "rxjs";
import {CakeModel} from "../models/CakeModel";
import {LoginService} from "../login-page/loginService";
import {UserModel} from "../models/userModel";

@Injectable({providedIn:'root'})
export class AdminService {

  constructor(private http: HttpClient,
              private loginService: LoginService) {
  }

  private apiSeverUrl=environment.apiBaseUrl;

  public saveCake(cake:CakeModel):Observable<any> {
    return this.http.post<any>(`${this.apiSeverUrl}/api/cake/saveCake`, cake)
  }
  public saveImage(imageFile:any):Observable<any> {
    return this.http.post<any>(`${this.apiSeverUrl}/api/v1/cakeImage/upload`,imageFile)
  }

  public registerNewUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.apiSeverUrl}/api/v1/auth/register`,user)
  }
}
