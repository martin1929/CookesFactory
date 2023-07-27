import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CakeService} from "./cakes/cakeService";

@Injectable({
  providedIn: 'root'
})
export class MyResolverResolver implements Resolve<boolean> {
  constructor(private cakeSevice: CakeService) {
  }

  public cakeArray: string[] = [];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }




}
