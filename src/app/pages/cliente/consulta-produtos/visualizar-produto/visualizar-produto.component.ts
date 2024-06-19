import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoService} from "../../../../services/produto.service";
import {ProdutoDtoType} from "../../../../types/produto-dto.type";
import {CurrencyPipe, NgIf} from "@angular/common";
import {SacolaComponent} from "../../sacola/sacola.component";
import {SacolaService} from "../../../../services/sacola.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-visualizar-produto',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './visualizar-produto.component.html',
  styleUrl: './visualizar-produto.component.scss'
})
export class VisualizarProdutoComponent implements OnInit {
  produto: ProdutoDtoType = {} as ProdutoDtoType;
  categoria: string = '';
  id: number = 0;
  imagemSelecionada: string | ArrayBuffer | null = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private produtoService: ProdutoService,
              private sacolaService: SacolaService,
              private toastr: ToastrService) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getProduto(this.id);
    });

    this.route.queryParams.subscribe(params => {
      this.categoria = params['categoria'];
    });
  }

  navigateToProdutos() {
    this.router.navigate(['/produtos'], {queryParams: {categoria: this.categoria}});
  }

  addToSacola() {
    this.sacolaService.adicionarProduto(this.produto).subscribe(
      (response) => {
        this.router.navigate(['/sacola']).then(
          () => {
            this.toastr.success('Produto adicionado na sacola');
          }
        );
      },
      (error) => {
        this.toastr.error('Só é possível adicionar produtos do mesmo agricultor na sacola!');
      }
    );
  }

  private getProduto(id: number) {
    this.produtoService.getProdutoById(id).subscribe(
      (produto: ProdutoDtoType) => {
        this.produto = produto;
        this.imagemSelecionada = 'data:' + produto.typeFoto + ';base64,' + this.arrayBufferToBase64(produto.byteFoto);
      },
      (error) => {
        console.error('Erro ao carregar detalhes do produto:', error);
      }
    );
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
