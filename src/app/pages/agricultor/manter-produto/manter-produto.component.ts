import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NavbarAgricultorComponent} from "../../../components/navbar-agricultor/navbar-agricultor.component";
import {ProdutoService} from "../../../services/produto.service";
import {ProdutoDtoType} from "../../../types/produto-dto.type";
import {NgForOf} from "@angular/common";
import {AgricultorService} from "../../../services/agricultor.service";

@Component({
  selector: 'app-manter-produto',
  standalone: true,
  imports: [
    NavbarAgricultorComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './manter-produto.component.html',
  styleUrl: './manter-produto.component.scss'
})
export class ManterProdutoComponent implements OnInit {
  produtos: ProdutoDtoType[] = [];

  constructor(private router: Router,
              private produtoService: ProdutoService,
              private agricultorService: AgricultorService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  addProduto() {
    this.router.navigate(['/manter-produto/add']);
  }

  navigateToHome() {
    this.router.navigate(['/home-agricultor']);
  }

  private getList() {
    this.agricultorService.getIdAgricultorByEmail().subscribe((id) => {
      this.produtoService.getProdutos(id as unknown as number).subscribe(
        (data: ProdutoDtoType[]) => {
          this.produtos = data;
        },
        (error) => {
          console.error('Erro ao buscar produtos:', error);
        }
      );
    });
  }
}
