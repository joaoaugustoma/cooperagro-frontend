import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EnderecoService} from "../../../../services/endereco.service";
import {CurrencyPipe} from "@angular/common";
import {PedidoVendaService} from "../../../../services/pedido-venda.service";

@Component({
  selector: 'app-confirmar-sacola',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './confirmar-sacola.component.html',
  styleUrl: './confirmar-sacola.component.scss'
})
export class ConfirmarSacolaComponent implements OnInit {
  carrinhoCompras: any;
  logradouro: string = "";
  bairro: string = "";
  precoTotal: number = 0;

  constructor(private router: Router,
              private enderecoService: EnderecoService,
              private pedidoVendaService: PedidoVendaService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    if (state) {
      this.carrinhoCompras = state['carrinhoCompras'];
      this.precoTotal = this.carrinhoCompras.valorTotal;
      this.getEndereco();
    }
  }

  ngOnInit() {
  }

  navigateToSacola() {
    this.router.navigate(["/sacola"]);
  }

  finalizarPedido() {
    this.pedidoVendaService.createPedidoVenda(this.carrinhoCompras).subscribe((response) => {
      console.log()
      this.router.navigate(["/sacola/pagamento"], { state: { pedidoVenda: response, nomeAgricultor: this.carrinhoCompras.nomeAgricultor} });
    });
  }

  private getEndereco() {
    this.enderecoService.getEndereco().subscribe((endereco: any) => {
      this.logradouro = endereco.logradouro;
      this.bairro = endereco.bairro;
    })
  }
}
