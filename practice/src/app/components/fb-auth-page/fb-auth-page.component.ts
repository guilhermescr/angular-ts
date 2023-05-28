import { Component } from '@angular/core';
import { FbAuthService } from 'src/app/services/fb-auth.service';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-fb-auth-page',
  templateUrl: './fb-auth-page.component.html',
  styleUrls: ['./fb-auth-page.component.css'],
})
export class FbAuthPageComponent {
  authUser!: firebase.User;
  hasLoggedIn: boolean = false;

  constructor(private fbAuthService: FbAuthService) {
    console.clear();
  }

  SignIn(): void {
    this.fbAuthService
      .SignInWithGoogle()
      .then((data) => {
        if (data.user !== null) {
          this.fbAuthService.saveUserData(data.user);
          this.authUser = data.user;
          this.hasLoggedIn = true;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  SignOut(): void {
    this.fbAuthService.SignOut();
    this.hasLoggedIn = false;
  }

  GetUser(): firebase.User {
    return this.fbAuthService.getUser();
  }

  consoleUserData(): void {
    if (this.authUser !== undefined) {
      console.log(this.authUser.displayName);
      console.log(this.authUser.email);
      console.log(this.authUser.photoURL);
    }
  }
}
