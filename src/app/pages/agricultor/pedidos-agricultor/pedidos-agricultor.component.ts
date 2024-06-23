import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CurrencyPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {LoginService} from "../../../services/login.service";
import {PedidoVendaService} from "../../../services/pedido-venda.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './pedidos-agricultor.component.html',
  styleUrl: './pedidos-agricultor.component.scss'
})
export class PedidosAgricultorComponent implements OnInit{
  pedidos: any[] = [];
  produtosPedido: any[] = [];

  constructor(private router: Router,
              private pedidoVendaService: PedidoVendaService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.carregarPedidos(); // Chamando o método para carregar pedidos
  }

  carregarPedidos() {
    this.pedidoVendaService.getPedidoVenda().subscribe(
      (data: any[]) => {
        if(!data)
          this.toastr.error('Sem pedidos!');
        this.pedidos = data;
        this.pedidos.forEach(pedido => {
          this.produtosPedido = pedido.carrinhoCompra.produtos;

        })
      },
      (error) => {
        console.error('Erro ao carregar pedidos', error);
      }
    );
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil-agricultor'])
  }

  navigateToDetalhes() {
    this.router.navigate(['/pedidos-agricultor/detalhes'])
  }

  iniciarEntregaPedido(id: number) {
    this.pedidoVendaService.iniciarEntregaPedido(id).subscribe(
      (data) => {
        this.toastr.success('Entrega iniciada com sucesso!');
        this.carregarPedidos();
      },
      (error) => {
        console.error('Erro ao iniciar entrega', error);
        this.toastr.error('Erro ao iniciar entrega');
      }
    );

  }
}
