import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoria = params['categoria'];
    });
  }
}
