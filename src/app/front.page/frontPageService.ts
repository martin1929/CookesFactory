import {Injectable, OnInit} from "@angular/core";
import {environment} from "../../environment/environment";
import {CakeModel} from "../models/CakeModel";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({providedIn:'root'})
export class FrontPageService implements OnInit{

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }
  httpOptions:any
  ngOnInit(): void {
    const token = this.cookieService.get("CakeCookies");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    }
  private apiSeverUrl=environment.apiBaseUrl;


  public sendCheckAdmin():Observable<any> {
    return this.http.get(`${this.apiSeverUrl}/api/v1/admin/get`,this.httpOptions)
  }

}
