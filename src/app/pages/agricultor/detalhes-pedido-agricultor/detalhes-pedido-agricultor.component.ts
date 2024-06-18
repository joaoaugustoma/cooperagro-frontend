import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";

@Component({
  selector: 'app-detalhes-pedido',
  standalone: true,
    imports: [
        PrimaryInputComponent,
        ReactiveFormsModule
    ],
  templateUrl: './detalhes-pedido-agricultor.component.html',
  styleUrl: './detalhes-pedido-agricultor.component.scss'
})
export class DetalhesPedidoAgricultorComponent {

  constructor(private router: Router) { }

  navigateToMeusPedidos() {
    this.router.navigate(['/pedidos-agricultor']);
  }
}
