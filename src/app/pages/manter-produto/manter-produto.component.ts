import { Component } from '@angular/core';
import {NavbarAgricultorComponent} from "../../components/navbar-agricultor/navbar-agricultor.component";

@Component({
  selector: 'app-manter-produto',
  standalone: true,
    imports: [
        NavbarAgricultorComponent
    ],
  templateUrl: './manter-produto.component.html',
  styleUrl: './manter-produto.component.scss'
})
export class ManterProdutoComponent {

}
