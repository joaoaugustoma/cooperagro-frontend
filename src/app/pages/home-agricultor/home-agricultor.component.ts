import { Component } from '@angular/core';
import {NavbarAgricultorComponent} from "../../components/navbar-agricultor/navbar-agricultor.component";

@Component({
  selector: 'app-home-agricultor',
  standalone: true,
  imports: [
    NavbarAgricultorComponent
  ],
  templateUrl: './home-agricultor.component.html',
  styleUrl: './home-agricultor.component.scss'
})
export class HomeAgricultorComponent {

}
