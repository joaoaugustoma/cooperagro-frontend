import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar-produto',
  standalone: true,
  imports: [],
  templateUrl: './visualizar-produto.component.html',
  styleUrl: './visualizar-produto.component.scss'
})
export class VisualizarProdutoComponent {

  constructor(private router: Router) {
  }

  navigateToProdutos() {
    this.router.navigate(['/produtos'])
  }

  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }
}
