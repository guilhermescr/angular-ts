import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FbAuthService {
  private userData!: firebase.User;

  constructor(private fbAuth: AngularFireAuth) {}

  SignInWithGoogle(): Promise<firebase.auth.UserCredential> {
    const provider = new auth.GoogleAuthProvider();

    return this.fbAuth.signInWithPopup(provider);
  }

  SignOut(): void {
    this.fbAuth.signOut();
    console.log('User signed out successfully!');
  }

  saveUserData(user: firebase.User) {
    this.userData = user;
  }

  getUser(): firebase.User {
    return this.userData;
  }
}
