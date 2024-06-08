import { Component } from '@angular/core';
import {NavbarAgricultorComponent} from "../../components/navbar-agricultor/navbar-agricultor.component";

@Component({
  selector: 'app-perfil-agricultor',
  standalone: true,
    imports: [
        NavbarAgricultorComponent
    ],
  templateUrl: './perfil-agricultor.component.html',
  styleUrl: './perfil-agricultor.component.scss'
})
export class PerfilAgricultorComponent {

}
