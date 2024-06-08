import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sacola',
  standalone: true,
  imports: [],
  templateUrl: './sacola.component.html',
  styleUrl: './sacola.component.scss'
})
export class SacolaComponent {
  nomeLoja: string = 'Loja 1';

  constructor( private router: Router) {
  }

  navigateToHome() {
    this.router.navigate(['/home'])
  }
}
