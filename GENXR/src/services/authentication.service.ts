import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User | null>

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.userData = angularFireAuth.authState;
  }

  SignUpWithEmailandPassword(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log("User Created!");
    }).catch(err => {
      console.log("User Creation Failed!", err.message);
    });
  }

  SignInWithEmailAndPassword(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      console.log("Auth succeeded!");
    }).catch(err => {
      console.log("Sign in Failed!", err.message);
    });
  }

  SignOut() {
    this.angularFireAuth.signOut();
  }
}
