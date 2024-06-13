import { Component } from '@angular/core';
import {PrimaryInputComponent} from "../../components/primary-input/primary-input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalhes-pedido',
  standalone: true,
    imports: [
        PrimaryInputComponent,
        ReactiveFormsModule
    ],
  templateUrl: './detalhes-pedido.component.html',
  styleUrl: './detalhes-pedido.component.scss'
})
export class DetalhesPedidoComponent {

  constructor(private router: Router) { }

  navigateToMeusPedidos() {
    this.router.navigate(['/meus-pedidos']);
  }
}
