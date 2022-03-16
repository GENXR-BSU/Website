import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authSerice: AuthenticationService) { }

  ngOnInit(): void {
  }

  signUp(email: string, password: string) {
    this.authSerice.SignUpWithEmailandPassword(email, password)
  }

}
