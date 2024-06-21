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
  preferenceId: string = '';
  pedidoVenda: any = {};
  vendedorPublicKey: string = '';

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

  initializeMercadoPago(): void {
    //PUBLIC KEY VENDEDOR

    const mp = new MercadoPago('APP_USR-ec0f153f-66e8-4669-a6be-1bbed8547c5d');
    const bricksBuilder = mp.bricks();

    bricksBuilder.create('wallet', 'wallet_container', {
      initialization: {
        preferenceId: this.preferenceId,
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
        this.preferenceId = response.id;
        this.vendedorPublicKey = response.vendedorPublicKey;
        this.initializeMercadoPago();
      },
      (error) => {
        console.error('Erro ao obter preferenceId:', error);
      }
    );
  }
}
