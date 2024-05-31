import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-perfil',
  standalone: true,
    imports: [
        NavbarComponent
    ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

}
