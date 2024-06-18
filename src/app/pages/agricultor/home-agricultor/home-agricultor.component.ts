import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NavbarAgricultorComponent} from "../../../components/navbar-agricultor/navbar-agricultor.component";
import {LoginService} from "../../../services/login.service";

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
export class HomeAgricultorComponent implements OnInit {
  nomeLoja: string = 'Loja A';
  qtdProdutosVendidos: string = '14.850';
  ganhos: string = 'R$ 1.485,00';

  constructor(private loginService: LoginService) {}


  ngOnInit() {
    this.nomeLoja = this.loginService.getNomeUsuario() as string;
  }

}
