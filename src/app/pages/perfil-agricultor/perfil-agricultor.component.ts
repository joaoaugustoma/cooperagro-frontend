import {Component, OnInit} from '@angular/core';
import {NavbarAgricultorComponent} from "../../components/navbar-agricultor/navbar-agricultor.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {Router, RouterLink} from "@angular/router";
import {LogoutComponent} from "../../components/logout/logout.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-perfil-agricultor',
  standalone: true,
    imports: [
        NavbarAgricultorComponent,
        NavbarComponent,
        RouterLink
    ],
  templateUrl: './perfil-agricultor.component.html',
  styleUrl: './perfil-agricultor.component.scss'
})
export class PerfilAgricultorComponent implements OnInit{
  nomeLoja: string = 'Loja A';

  constructor(public dialog: MatDialog,
              private router: Router,
              private loginService: LoginService) {}

  ngOnInit() {
    this.nomeLoja = this.loginService.getNomeUsuario() as string;
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
        this.router.navigate(['/perfil-agricultor']);
      }
    });
  }

  cancelarAgricultorAction() {
    this.router.navigate(['/cancelar-agricultor']);
  }

  edit() {
    this.router.navigate(['/perfil-agricultor/editar']);
  }
}
