import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NavbarComponent} from "../../../components/navbar/navbar.component";
import {LoginService} from "../../../services/login.service";
import {LogoutComponent} from "../../../components/logout/logout.component";

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
export class PerfilComponent implements OnInit{
  nomeUsuario: string = '';

  constructor(public dialog: MatDialog,
              private router: Router,
              private loginService: LoginService) {}

  ngOnInit() {
    this.nomeUsuario = this.loginService.getNomeUsuario() as string;
  }

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

  tornarAgricultorAction() {
    this.router.navigate(['/tornar-agricultor']);
  }

  navigateToMeusPedidos() {
    this.router.navigate(['/meus-pedidos']);
  }

  edit() {
    this.router.navigate(['/perfil/editar']);
  }
}
