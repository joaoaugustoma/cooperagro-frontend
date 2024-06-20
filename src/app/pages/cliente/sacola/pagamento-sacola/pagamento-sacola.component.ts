import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {PedidoVendaService} from "../../../../services/pedido-venda.service";

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

  constructor(private router: Router, private pedidoVendaService: PedidoVendaService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    if (state) {
      this.carrinhoCompras = state['carrinhoCompras'];
      this.precoTotal = this.carrinhoCompras.valorTotal;
      console.log(this.carrinhoCompras)
      this.nomeLoja = this.carrinhoCompras.nomeAgricultor;
    }
  }

  confirmar() {
    this.pedidoVendaService.createPedidoVenda(this.carrinhoCompras).subscribe((response) => {
      console.log(response)
    }, error => {
      console.log(error)
    });
  }

  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }
}
