import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavbarAgricultorComponent} from "../../../components/navbar-agricultor/navbar-agricultor.component";
import {LoginService} from "../../../services/login.service";
import {PedidoVendaService} from "../../../services/pedido-venda.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home-agricultor',
  standalone: true,
  imports: [
    NavbarAgricultorComponent,
    RouterLink,
    DatePipe,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './home-agricultor.component.html',
  styleUrl: './home-agricultor.component.scss'
})
export class HomeAgricultorComponent implements OnInit {
  nomeLoja: string = 'Loja A';
  qtdProdutosVendidos: string = '0';
  ganhos: string = 'R$ 0,00';
  pedidos: any[] = []; // Adicionando a variável para armazenar os pedidos

  constructor(private loginService: LoginService,
              private pedidoVendaService: PedidoVendaService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.nomeLoja = this.loginService.getNomeUsuario() as string;
    this.carregarPedidos(); // Chamando o método para carregar pedidos
  }

  carregarPedidos() {
    this.pedidoVendaService.getPedidoVenda().subscribe(
      (data: any[]) => {
        if(!data)
          this.toastr.error('Sem pedidos!');
        console.log(data)
        this.pedidos = data;
      },
      (error) => {
        console.error('Erro ao carregar pedidos', error);
      }
    );
  }
}
