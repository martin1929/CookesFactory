import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";
import {CakeModel} from "../models/CakeModel";

@Injectable({providedIn:'root'})
export class CakeService{
  constructor(private http: HttpClient) {
  }
  private apiSeverUrl=environment.apiBaseUrl;

  public getAllCakes():Observable<any>{
    return this.http.get(`${this.apiSeverUrl}/api/cake/getCakes`)
  }




}
