import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos-agricultor.component.html',
  styleUrl: './pedidos-agricultor.component.scss'
})
export class PedidosAgricultorComponent {

  constructor( private router: Router) {
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil-agricultor'])
  }

  navigateToDetalhes() {
    this.router.navigate(['/pedidos-agricultor/detalhes'])
  }
}
