import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UrlEnums} from "../info/urlEnums";
import {HttpClient} from "@angular/common/http";
import {DeviceDetectorService} from "ngx-device-detector";
import * as Bowser from 'bowser';
import {DomSanitizer} from "@angular/platform-browser";
import {FrontPageService} from "./frontPageService";
import {LoginService} from "../login-page/loginService";
import {Store} from "@ngxs/store";
import {LocalUser, LocalUserAction} from "../local-user-state";
import SetLocalUser = LocalUserAction.SetLocalUser;

@Component({
  selector: 'app-front.page',
  templateUrl: './front.page.component.html',
  styleUrls: ['./front.page.component.css']
})
export class FrontPageComponent implements OnInit{

  public urlEnums=UrlEnums;
  constructor(private router: Router,
  private http: HttpClient,
              private deviceService: DeviceDetectorService,
              private frontPageService: FrontPageService,
              private loginService: LoginService,
              private store:Store
  ) {
  }


  ngOnInit() {
    this.loginService.getUser('Martin-88@mail.ru').subscribe((resp)=>{
      console.log(resp)
      this.localUser=resp;
      this.listeners();
    })
  }

  public localUser: LocalUser | undefined;

  listeners(){
    this.store.dispatch(new LocalUserAction.SetLocalUser(new LocalUser(this.localUser)));
    this.store.dispatch(new LocalUserAction.SetLocalUsers(new LocalUser(this.localUser)));
  }

  getClick(){
    this.router.navigate(['/cakes']);
  }

  checkAdmin() {
this.frontPageService.sendCheckAdmin().subscribe((resp)=>{
  console.log(resp);
});
  }

  goAdmin() {
    this.router.navigate(['/admin']);
  }
}
