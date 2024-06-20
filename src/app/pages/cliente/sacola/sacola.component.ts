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
  nomeLoja: string = '';
  carrinhoCompras: any;
  produtos: any[] = [];
  precoTotal: any;

  constructor(private router: Router, private sacolaService: SacolaService) {}

  ngOnInit() {
    this.getCarrihoCompras();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToConfirmar() {
    this.router.navigate(['/sacola/confirmar']);
  }

  private trataImagem() {
    this.produtos.forEach(produto => {
      if(produto.byteFoto != null) {
        produto.imagemBase64 = 'data:' + produto.typeFoto + ';base64,' + this.arrayBufferToBase64(produto.byteFoto);
      } else {
        produto.imagemBase64 = null;
      }
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

  removeProduto(produtoId: number) {
    this.sacolaService.removeProduto(produtoId).subscribe(
      (response) => {
        this.getCarrihoCompras();
      }, (error) => {

      }
    );
  }

  private getCarrihoCompras() {
    this.sacolaService.getCarrinhoCompras().subscribe(
      (response) => {
        this.carrinhoCompras = response;
        this.produtos = response.produtos;
        this.precoTotal = response.valorTotal;
        this.nomeLoja = response.nomeAgricultor;

        this.trataImagem();
      }, (error) => {

      }
    );
  }
}
