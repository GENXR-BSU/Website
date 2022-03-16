import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User | null>;
  authStatus: boolean = false;
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { 
    this.userData = angularFireAuth.authState;
  }

  SignUpWithEmailandPassword(email: string, password: string) : void {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.authStatus = true;
      this.router.navigate(['/main']);
    }).catch(err => {
      console.log("User Creation Failed!", err.message);
    });
  }

  SignInWithEmailAndPassword(email: string, password: string) : void {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.authStatus = true;
      this.router.navigate(['main']);
    }).catch(err => {
      console.log("Sign in Failed!", err.message);
    });
  }

  SignOut() : void {
    this.angularFireAuth.signOut();
  }

  GetAuthStatus() : boolean {
    return this.authStatus;
  }
}
