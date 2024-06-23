import { Component } from '@angular/core';
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {StatusPedido} from "../../../enums/status-pedido";
import {NavbarComponent} from "../../../components/navbar/navbar.component";
import {Router} from "@angular/router";
import {PedidoVendaService} from "../../../services/pedido-venda.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nomeLoja: string = "";
  numeroPedido: string = "";
  statusPedido: string = "";

  constructor(private router: Router,
              private pedidoVendaService: PedidoVendaService) {
    this.pedidoVendaService.getUltimoPedido().subscribe(pedido => {
      console.log(pedido);
      this.numeroPedido = pedido.id;
      this.statusPedido = pedido.situacaoEntrega  ? pedido.situacaoEntrega : pedido.situacaoPedido;
      this.nomeLoja = pedido.carrinhoCompra.nomeAgricultor;
    });
  }

  navigateToProdutos(categoria: string) {
    this.router.navigate(['/produtos'], { queryParams: { categoria: categoria } });
  }

  navigateToPedidos() {
    this.router.navigate(['/meus-pedidos']);
  }
}
