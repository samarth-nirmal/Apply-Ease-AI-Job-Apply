import { Component, HostListener } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../jobServices/auth.service';
import { JobService } from '../jobServices/job.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router, private jobService : JobService) {}
  userId : any | undefined
  logoSrc = 'applogo.png';
  isScrolled = false;
  LoggedIn : boolean = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
    this.logoSrc = window.scrollY > 10 ? 'app-logo-black.png' : 'applogo.png';
    
  }

  isUserLoggedIn() {
    return this.authService.isAuthenticated();
  }


  
  userProfile() {
    this.userId = this.authService.getUserId();
    this.router.navigate(['user-profile', this.userId])
  }

  jobSearch() {
    this.router.navigate(['/job-inputs'])
  }

  dashboard() {
    this.router.navigate(['/dashboard'])
  }

  loginToNaukri() {
    this.userId = this.authService.getUserId();
    this.jobService.naukriLogin(this.userId).subscribe((data) => {
      
    })
  }

  fetchedJobs() {
    this.router.navigate(['/fetched-jobs'])
  }

  logout() {
    this.authService.logout();
    // this.router.navigate(['/login']);
  }
}
