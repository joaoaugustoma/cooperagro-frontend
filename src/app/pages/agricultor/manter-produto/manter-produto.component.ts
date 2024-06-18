import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NavbarAgricultorComponent} from "../../../components/navbar-agricultor/navbar-agricultor.component";

@Component({
  selector: 'app-manter-produto',
  standalone: true,
    imports: [
        NavbarAgricultorComponent
    ],
  templateUrl: './manter-produto.component.html',
  styleUrl: './manter-produto.component.scss'
})
export class ManterProdutoComponent {

  constructor(private router: Router) {
  }

  addProduto() {
    this.router.navigate(['/manter-produto/add']);
  }

  navigateToHome() {
    this.router.navigate(['/home-agricultor']);
  }
}
