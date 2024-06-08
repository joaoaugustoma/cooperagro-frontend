import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {Router, RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LogoutComponent} from "../../components/logout/logout.component";
import {LoginService} from "../../services/login.service";

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

  constructor(public dialog: MatDialog,
              private router: Router,
              private loginService: LoginService) {}


  logout() {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '400px',
      height: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loginService.logout();
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/perfil']);
      }
    });
  }
}
