import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  nomeUsuario: string = 'João Augusto Moreira Ananias';

  logout() {

  }
}
