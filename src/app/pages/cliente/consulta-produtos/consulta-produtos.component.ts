import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NavbarComponent} from "../../../components/navbar/navbar.component";
import {ProdutoService} from "../../../services/produto.service";
import {ProdutoDtoType} from "../../../types/produto-dto.type";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-consulta-produtos',
  standalone: true,
  imports: [
    NavbarComponent,
    MatTab,
    MatTabGroup,
    CommonModule // Import necessary Angular modules
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.scss'] // Fixed typo: styleUrl to styleUrls
})
export class ConsultaProdutosComponent implements OnInit {
  categoria: string = '';
  produtos: ProdutoDtoType[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoria = params['categoria'];
      this.getProdutos(this.categoria); // Moved inside the subscribe to get products whenever category changes
    });
  }

  navigateToLoja() {
    this.router.navigate(['/produtos/loja'], {queryParams: {categoria: this.categoria}});
  }

  navigateToProduto(produto: ProdutoDtoType) {
    this.router.navigate(['/produtos/detalhes', produto.id], {queryParams: {categoria: this.categoria}});
  }

  private getProdutos(categoria: string) {
    this.produtoService.getProdutosByCategoria(categoria).subscribe(
      (data) => {
        console.log(data)
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }
}
