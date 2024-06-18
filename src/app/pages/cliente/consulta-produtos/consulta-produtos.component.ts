import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NavbarComponent} from "../../../components/navbar/navbar.component";

@Component({
  selector: 'app-consulta-produtos',
  standalone: true,
  imports: [
    NavbarComponent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.scss'
})
export class ConsultaProdutosComponent implements OnInit{
  categoria: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoria = params['categoria'];
    });
  }

  navigateToLoja() {
    this.router.navigate(['/produtos/loja'], { queryParams: { categoria: this.categoria } });
  }

  navigateToProduto() {
    this.router.navigate(['/produtos/detalhes'], { queryParams: { categoria: this.categoria } });
  }
}
