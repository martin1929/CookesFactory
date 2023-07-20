import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class CakeService{
  constructor(private http: HttpClient) {
  }
  private apiSeverUrl=environment.apiBaseUrl;
  cakes:any;

  public getCakesNames():Observable<any>{
    return this.http.get(`${this.apiSeverUrl}/api/cake/getCakeName`)
  }

  public getCakes():any{
    this.getCakesNames().subscribe((resp: any)=>{
      this.cakes=resp;
      return this.cakes;
    })
  }

}
