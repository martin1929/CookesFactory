import {Role} from "./Role";
import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";

export class LocalUser {
  public id: number | undefined;
  public firstName: string | undefined;
  public lastName: string | undefined;
  public email: string | undefined;
  public role: Role | undefined;

  constructor(localUser: LocalUser | undefined) {
    if(localUser){
      this.id = localUser.id;
      this.firstName = localUser.firstName;
      this.lastName = localUser.lastName;
      this.email = localUser.email;
      this.role = localUser.role;
    }

  };

}

export namespace LocalUserAction {

  export class SetLocalUser {
    static readonly type = '[Local-user] set user state';
    constructor(public user: LocalUser | undefined) {
    }
  }

  export class SetLocalUsers {
    static readonly type = '[Local-user] set user state';
    constructor(public user: LocalUser | undefined) {
    }
  }
}

@State<LocalUser>({
  name: LocalUserState.storeName,
  defaults: LocalUserState.defaults
})

@Injectable()
export class LocalUserState {
  static readonly storeName = 'currentUser';
  static readonly defaults: LocalUser = {
    id: -1,
    firstName: '',
    lastName: '',
    email: '',
    role: Role.USER,
  }



  @Action(LocalUserAction.SetLocalUser)
  setLocalUser({setState}: StateContext<LocalUser>, event: LocalUserAction.SetLocalUser) {
    if (event.user){
      setState(event.user);

    }
  }

  @Action(LocalUserAction.SetLocalUsers)
  setLocalUsers(ctx: StateContext<LocalUser>, event: LocalUserAction.SetLocalUsers) {
    if (event.user){
      ctx.patchState(event.user);

    }
  }

}
