import {Component, Input, OnInit} from '@angular/core';
import {CakeModel} from "../models/CakeModel";
import {AdminService} from "./admin.service";
import {UserModel} from "../models/userModel";
import {LocalUser, LocalUserState} from "../local-user-state";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  constructor(private adminService: AdminService,
              private store: Store) {
  }
  @Select(LocalUserState) user$: Observable<LocalUser> | undefined;
  ngOnInit(): void {
    this.listener()
  }

  selectedFile: File | undefined;
  public cake: boolean = false;
  public register: boolean = false;
  public options: boolean = true;
  public role: string = '';
  public localUser: LocalUser | undefined
  public success: boolean = false;


  listener() {
    if (this.user$) {
      this.user$.subscribe((user) => {
        console.log(user);
      });
    }
    this.store.select(LocalUserState).subscribe((user: LocalUser) => {
      this.localUser = user;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

//Add new cake with image
  sendCakeModel(name: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement) {
    const formData = new FormData();
    const cakeModel = new CakeModel()
    cakeModel.cakeName = name.value;
    cakeModel.description = description.value;
    cakeModel.cakeImgName = this.selectedFile?.name;
    cakeModel.price = Number(price.value);
    // @ts-ignore
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.adminService.saveCake(cakeModel).subscribe((response) => {
      setTimeout(() => {
        this.success = false
      }, 1000);
      this.success = true

    });
    this.adminService.saveImage(formData).subscribe()
  }

  //Register new user
  sendUserModel(name: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    const user = new UserModel();
    user.firstName = name.value;
    user.lastName = lastName.value;
    user.email = email.value;
    user.password = Number(password.value);
    user.role = this.role;

    this.adminService.registerNewUser(user).subscribe();
  }

  dropOptions() {
    this.register = false;
    this.cake = false;
    this.options = false;
  }

  choseOption(option: string) {
    this.dropOptions();
    switch (option) {
      case 'register': {
        this.register = true;
        break
      }
      case 'cake': {
        this.cake = true
        break
      }
    }
  }

  returnHome() {
    this.register = false;
    this.cake = false;
    this.options = true;
  }

  getSelectedValue($event: Event) {
    // @ts-ignore
    this.role = event.target.value;
  }


}

