import {Injectable} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class AuthService {
  user = {
    'name': '',
    'email': '',
    'mob_num': '',
  };

  setUserLoggedIn(name, email, mob_num) {
    this.user.name = name;
    this.user.email = email;
    this.user.mob_num = mob_num;
  }

  getUserLoggedIn(){
    if(this.user.name!=''&&this.user.email!=''&&this.user.mob_num!=''){
      return true;
    }
    return false;
  }

}
