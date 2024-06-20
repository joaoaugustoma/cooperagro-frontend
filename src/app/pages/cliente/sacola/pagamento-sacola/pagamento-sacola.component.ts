import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-pagamento-sacola',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './pagamento-sacola.component.html',
  styleUrl: './pagamento-sacola.component.scss'
})
export class PagamentoSacolaComponent {
  nomeLoja: string = '';
  carrinhoCompras: any;
  precoTotal: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    if (state) {
      this.carrinhoCompras = state['carrinhoCompras'];
      this.precoTotal = this.carrinhoCompras.valorTotal;
      console.log(this.carrinhoCompras)
      this.nomeLoja = this.carrinhoCompras.nomeAgricultor;
    }
  }

  navigateToConfirmar() {
    this.router.navigate(['/sacola/pagamento/confirmar'])
  }

  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }
}
