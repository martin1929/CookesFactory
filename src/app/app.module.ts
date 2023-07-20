import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CakesComponent} from './cakes/cakes.component';
import {FrontPageComponent} from './front.page/front.page.component';
import {RouterModule, Routes} from "@angular/router";
import {BreadesComponent} from './breades/breades.component';
import {InfoComponent} from './info/info.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CookieService} from "ngx-cookie-service";
import {LoginService} from "./login-page/loginService";
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AuthInterceptor} from "./AuthInterceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyResolverResolver} from "./my-resolver.resolver";
import {AuthGuard} from "./auth/auth.guard";
import { TryComponent } from './try/try.component';
import {NgxsModule} from "@ngxs/store";
import {LocalUser, LocalUserAction, LocalUserState} from "./local-user-state";
import {SpeedTestModule} from "ng-speed-test";


const appRoutes: Routes = [
  {path: 'frontPage', component: FrontPageComponent},
  {path: 'bread', component: BreadesComponent},
  {path: 'info', component: InfoComponent},
  {path: 'try', component: TryComponent},
  {path: 'log', component: LoginPageComponent},
  {path: 'admin', component: AdminPageComponent,canActivate: [AuthGuard]},
  {
    path: 'cakes', component: CakesComponent,
    resolve: {myData: MyResolverResolver}
  }

]

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    FrontPageComponent,
    BreadesComponent,
    InfoComponent,
    LoginPageComponent,
    AdminPageComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([LocalUserState]),
    SpeedTestModule,

  ],
  providers: [CookieService,
    LocalUserState,
    MyResolverResolver,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
