import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProdutoDtoType} from "../../../types/produto-dto.type";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {SacolaService} from "../../../services/sacola.service";

@Component({
  selector: 'app-sacola',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './sacola.component.html',
  styleUrl: './sacola.component.scss'
})
export class SacolaComponent implements OnInit{
  nomeLoja: string = 'Loja 1';
  carrinhoCompras: any;
  produtos: ProdutoDtoType[] = [];
  precoTotal: any;
  imagemProduto: string | ArrayBuffer | null = null;

  constructor(private router: Router, private sacolaService: SacolaService) {}

  ngOnInit() {

    this.sacolaService.getCarrinhoCompras().subscribe(
      (response) => {
        console.log(response)
        this.carrinhoCompras = response;
        this.produtos = response.produtos;
        this.trataImagem();
        this.precoTotal = response.valorTotal;
      }
    );
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToConfirmar() {
    this.router.navigate(['/sacola/confirmar']);
  }

  private trataImagem() {
    this.produtos.forEach(produto => {
      this.imagemProduto = 'data:' + produto.typeFoto + ';base64,' + this.arrayBufferToBase64(produto.byteFoto);
    });
  }

  private arrayBufferToBase64(buffer: number[]): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}
