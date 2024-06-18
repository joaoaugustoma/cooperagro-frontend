import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProdutoService} from "../../../../services/produto.service";
import {ProdutoDtoType} from "../../../../types/produto-dto.type";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-visualizar-produto',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './visualizar-produto.component.html',
  styleUrl: './visualizar-produto.component.scss'
})
export class VisualizarProdutoComponent implements OnInit {
  produto: ProdutoDtoType = {} as ProdutoDtoType;
  categoria: string = ''
  id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router,
              private produtoService: ProdutoService) {
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

  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }

  private getProduto(id: number) {
    this.produtoService.getProdutoById(id).subscribe(
      (produto: ProdutoDtoType) => {
        this.produto = produto;
        console.log(produto)
      },
      (error) => {
        console.error('Erro ao carregar detalhes do produto:', error);
      }
    );
  }
}
