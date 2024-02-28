import {Injectable} from "@angular/core";

import {environment} from "../../environment/environment";
import {Observable} from "rxjs";

import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {UserModel} from "../models/userModel";
import {UserLoginPassword} from "../models/UserLoginPassword";




@Injectable({providedIn:'root'})
export class LoginService {

  constructor(private http: HttpClient,
              ) {
  }

  private apiSeverUrl=environment.apiBaseUrl;

  public sendLoginPassword(user:UserLoginPassword):Observable<{access_token: string}>{
    return this.http.post<{access_token: string}>(`${this.apiSeverUrl}/api/v1/auth/authenticate`,user)
  }

  public getUser(email:string):Observable<any>{
    return this.http.get(`${this.apiSeverUrl}/api/user/getUser?email=${encodeURIComponent(email)}`);
  }
}
