import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizar-produto',
  standalone: true,
  imports: [],
  templateUrl: './visualizar-produto.component.html',
  styleUrl: './visualizar-produto.component.scss'
})
export class VisualizarProdutoComponent implements OnInit{
  categoria: string = ''

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoria = params['categoria'];
    });
  }

  navigateToProdutos() {
    this.router.navigate(['/produtos'], { queryParams: { categoria: this.categoria } });
  }

  navigateToSacola() {
    this.router.navigate(['/sacola'])
  }
}
