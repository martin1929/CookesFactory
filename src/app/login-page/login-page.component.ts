import {UserLoginPassword} from "../models/UserLoginPassword";
import {LoginService} from "./loginService";
import {Component, EventEmitter, OnInit} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators,} from "@angular/forms";
import {UserModel} from "../models/userModel";
import {Store} from "@ngxs/store";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: LoginService,
              private cookiesService: CookieService,
              private router: Router,private store: Store) {
  }

  ngOnInit() {
  }

  user: UserModel = new UserModel();

  sendVerifyUser(name: HTMLInputElement, password: HTMLInputElement) {
    const user = new UserLoginPassword();
    user.email = name.value;
    user.password = password.value;
    this.loginService.sendLoginPassword(user).subscribe((response: { access_token: string }) => {
      this.cookiesService.set('CakeCookies', response.access_token);
      this.loginService.getUser(user.email).subscribe((resp) => {
        this.user = resp;
        console.log(this.user.role + '' + this.user.lastName)
        this.store.subscribe()
      })
      this.router.navigate(['/frontPage']);
    });
  }


}
