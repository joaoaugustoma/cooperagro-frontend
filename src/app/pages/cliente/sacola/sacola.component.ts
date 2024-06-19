import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProdutoDtoType} from "../../../types/produto-dto.type";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {SacolaService} from "../../../services/sacola.service";

@Component({
  selector: 'app-sacola',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './sacola.component.html',
  styleUrl: './sacola.component.scss'
})
export class SacolaComponent implements OnInit{
  nomeLoja: string = 'Loja 1';
  produtos: ProdutoDtoType[] = [];

  constructor(private router: Router, private sacolaService: SacolaService) {}

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToConfirmar() {
    this.router.navigate(['/sacola/confirmar']);
  }

  calcularPrecoTotal() {
    return this.produtos.reduce((acc, produto) => acc + produto.precoUnitario, 0);
  }
}
