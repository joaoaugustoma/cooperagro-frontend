import { Component } from '@angular/core';
import {NavbarComponent} from "../../../components/navbar/navbar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-descobrir',
  standalone: true,
    imports: [
        NavbarComponent
    ],
  templateUrl: './descobrir.component.html',
  styleUrl: './descobrir.component.scss'
})
export class DescobrirComponent {

  constructor(private router: Router) {}

  navigateToProdutos(categoria: string) {
    this.router.navigate(['/produtos'], { queryParams: { categoria: categoria } });
  }
}
