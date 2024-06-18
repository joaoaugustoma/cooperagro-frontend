import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmar-sacola',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-sacola.component.html',
  styleUrl: './confirmar-sacola.component.scss'
})
export class ConfirmarSacolaComponent {

  constructor(private router: Router) {
  }

  navigateToSacola() {
    this.router.navigate(["/sacola"]);
  }

  navigateToPagamento() {
    this.router.navigate(["/sacola/pagamento"])
  }
}
