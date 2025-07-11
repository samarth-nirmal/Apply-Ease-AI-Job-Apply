import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../jobServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/landing-page']);
      return false;
    }
    return true;
  }
}