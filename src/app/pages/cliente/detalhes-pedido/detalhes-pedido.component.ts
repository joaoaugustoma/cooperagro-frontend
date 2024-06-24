import {Component} from '@angular/core';
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {PedidoVendaService} from "../../../services/pedido-venda.service";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {ToastrService} from "ngx-toastr";

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
  pedidoId: number = 0;

  constructor(private router: Router,
              private pedidoVendaService: PedidoVendaService,
              private toastr: ToastrService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    if (state) {
      this.pedidoId = state['pedidoId'];
      this.getPedidoDetalhes(this.pedidoId);
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

  confirmarEntrega() {
    this.pedidoVendaService.confirmarEntrega(this.pedidoId).subscribe(
      (response) => {
        this.toastr.success('Entrega confirmada com sucesso!');
        this.router.navigate(['/meus-pedidos']);
      }, (error) => {
        console.error(error);
      }
    );
  }
}
