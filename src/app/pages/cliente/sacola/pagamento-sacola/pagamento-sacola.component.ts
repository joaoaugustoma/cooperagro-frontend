import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {PedidoVendaService} from "../../../../services/pedido-venda.service";
import {PagamentoMercadoPagoComponent} from "./pagamento-mercado-pago/pagamento-mercado-pago.component";

@Component({
  selector: 'app-pagamento-sacola',
  standalone: true,
  imports: [
    CurrencyPipe,
    PagamentoMercadoPagoComponent
  ],
  templateUrl: './pagamento-sacola.component.html',
  styleUrl: './pagamento-sacola.component.scss'
})
export class PagamentoSacolaComponent {
  nomeLoja: string = '';
  pedidoVenda: any;
  precoTotal: number = 0;


  constructor(private router: Router, private pedidoVendaService: PedidoVendaService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    if (state) {
      this.pedidoVenda = state['pedidoVenda'];
      this.nomeLoja = state['nomeAgricultor'];
      this.precoTotal = this.pedidoVenda.valorTotalPedido;
    }
  }


  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }
}
