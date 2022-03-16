import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated : boolean = this.authService.GetAuthStatus();
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }

      return isAuthenticated;
  }
  
}
