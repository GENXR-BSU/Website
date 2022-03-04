import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService : AuthenticationService) { 
    this.email = "";
    this.password = "";
   }

  signIn(email : string, password : string) {
    this.authService.SignInWithEmailAndPassword(email, password);
  }
  ngOnInit(): void {
  }

}
