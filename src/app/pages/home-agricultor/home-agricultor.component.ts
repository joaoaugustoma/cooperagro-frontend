import { Component } from '@angular/core';
import {NavbarAgricultorComponent} from "../../components/navbar-agricultor/navbar-agricultor.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-agricultor',
  standalone: true,
  imports: [
    NavbarAgricultorComponent,
    RouterLink
  ],
  templateUrl: './home-agricultor.component.html',
  styleUrl: './home-agricultor.component.scss'
})
export class HomeAgricultorComponent {
  nomeLoja: string = 'Loja A';
  qtdProdutosVendidos: string = '14.850';
  ganhos: string = 'R$ 1.485,00';

}
