import { Component } from '@angular/core';
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {StatusPedido} from "../../../enums/status-pedido";
import {NavbarComponent} from "../../../components/navbar/navbar.component";
import {Router} from "@angular/router";

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
  nomeLoja: string = "Loja do Zé";
  numeroPedido: string = "123456";
  statusPedido: StatusPedido = StatusPedido.SAIU_PARA_ENTREGA;

  constructor(private router: Router) {}

  navigateToProdutos(categoria: string) {
    this.router.navigate(['/produtos'], { queryParams: { categoria: categoria } });
  }

  navigateToPedidos() {
    this.router.navigate(['/meus-pedidos']);
  }
}
