import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent {

  constructor(private router: Router) { }

  navigateToSignup() {
    this.router.navigate(['/signup'])
  }

  navigateToHome() {
    this.router.navigate(['/home'])
  }
}
