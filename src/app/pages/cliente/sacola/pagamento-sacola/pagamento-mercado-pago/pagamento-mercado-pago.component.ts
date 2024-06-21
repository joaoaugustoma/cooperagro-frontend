import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PedidoVendaService} from "../../../../../services/pedido-venda.service";
import {map} from "rxjs";

declare const MercadoPago: any;

@Component({
  selector: 'app-pagamento-mercado-pago',
  standalone: true,
  imports: [],
  templateUrl: './pagamento-mercado-pago.component.html',
  styleUrl: './pagamento-mercado-pago.component.scss'
})
export class PagamentoMercadoPagoComponent implements OnInit, AfterViewInit {
  pedidoVenda: any = {};

  constructor(private router: Router, private pedidoVendaService: PedidoVendaService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    if (state) {
      this.pedidoVenda = state['pedidoVenda'];
      this.getPreferenceId(this.pedidoVenda);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  initializeMercadoPago(preferenceId: string): void {
    const mp = new MercadoPago('APP_USR-ec0f153f-66e8-4669-a6be-1bbed8547c5d');
    const bricksBuilder = mp.bricks();

    bricksBuilder.create('wallet', 'wallet_container', {
      initialization: {
        preferenceId: preferenceId,
      },
      customization: {
        texts: {
          valueProp: 'smart_option',
        },
      },
    });
  }

  private getPreferenceId(pedidoVenda: any) {
    this.pedidoVendaService.getPreferenceId(pedidoVenda).subscribe(
      (response) => {
        this.initializeMercadoPago(response.id);
      },
      (error) => {
        console.error('Erro ao obter preferenceId:', error);
      }
    );
  }
}
