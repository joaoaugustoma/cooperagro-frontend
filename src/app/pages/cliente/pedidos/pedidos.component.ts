import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PedidoVendaService} from "../../../services/pedido-venda.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    CurrencyPipe
  ],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];
  produtosPedido: any[] = [];

  constructor(private router: Router,
              private pedidoVendaService: PedidoVendaService) {
  }

  ngOnInit() {
    this.pedidoVendaService.getPedidosByEmailUsuario().subscribe(
      (response) => {
        this.pedidos = response;
        this.pedidos.forEach(pedido => {
          this.produtosPedido = pedido.carrinhoCompra.produtos;
        })
      })
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil'])
  }

  navigateToDetalhes(pedidoId: number) {
    this.router.navigate(['/meus-pedidos/detalhes'], { state: { pedidoId: pedidoId } });
  }
}
