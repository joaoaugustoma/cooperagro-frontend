import {Component} from '@angular/core';
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {PedidoVendaService} from "../../../services/pedido-venda.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-detalhes-pedido',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    ReactiveFormsModule,
    CurrencyPipe,
    NgForOf,
    DatePipe
  ],
  templateUrl: './detalhes-pedido.component.html',
  styleUrl: './detalhes-pedido.component.scss'
})
export class DetalhesPedidoComponent {

  pedido: any = {};
  nomeAgricultor: string = "";
  produtos: any[] = [];

  constructor(private router: Router,
              private pedidoVendaService: PedidoVendaService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    if (state) {
      this.getPedidoDetalhes(state['pedidoId']);
    }
  }

  navigateToMeusPedidos() {
    this.router.navigate(['/meus-pedidos']);
  }

  private getPedidoDetalhes(pedidoId: number) {
    this.pedidoVendaService.getPedidoVendaById(pedidoId).subscribe(
      (response) => {
        console.log(response)
        this.pedido = response;
        this.nomeAgricultor = response.carrinhoCompra.nomeAgricultor;
        this.produtos = response.carrinhoCompra.produtos;
      }, (error) => {
        console.error(error);
      }
    );
  }
}
