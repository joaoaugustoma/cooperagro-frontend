import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  getIcon(route: string): string {
    const routeWithoutSlash = route.replace('/', '');
    return this.isActive(route) ? `/assets/svg/${routeWithoutSlash}-active.svg` : `/assets/svg/${routeWithoutSlash}.svg`;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      this.currentRoute = route;
    });
  }
}
