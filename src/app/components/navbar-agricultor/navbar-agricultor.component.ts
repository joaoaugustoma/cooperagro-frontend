import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar-agricultor',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navbar-agricultor.component.html',
  styleUrl: './navbar-agricultor.component.scss'
})
export class NavbarAgricultorComponent implements OnInit{
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


  navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      this.currentRoute = route;
    });
  }
}
