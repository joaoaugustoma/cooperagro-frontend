import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagamento-sacola',
  standalone: true,
  imports: [],
  templateUrl: './pagamento-sacola.component.html',
  styleUrl: './pagamento-sacola.component.scss'
})
export class PagamentoSacolaComponent {
  nomeLoja: string = 'Loja 1';

  constructor(private router: Router) {
  }

  navigateToConfirmar() {
    this.router.navigate(['/sacola/pagamento/confirmar'])
  }

  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }
}
