import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";
import {ToastrService} from "ngx-toastr";
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {AgricultorService} from "../../../services/agricultor.service";

@Component({
  selector: 'app-cancelar-agricultor',
  standalone: true,
    imports: [
        PrimaryInputComponent,
        ReactiveFormsModule
    ],
  templateUrl: './cancelar-agricultor.component.html',
  styleUrl: './cancelar-agricultor.component.scss'
})
export class CancelarAgricultorComponent {

  constructor(private router: Router,
              private agricultorService: AgricultorService,
              private toastr: ToastrService ){
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil-agricultor']);
  }

  submit() {
    this.agricultorService.cancelarAgricultor().subscribe({
      next: (newToken) => {
        console.log(newToken)
        sessionStorage.setItem('auth-token', newToken);
        const tokenPayload = jwtDecode<any>(newToken);
        const userRole = tokenPayload.role;
        console.log(userRole)
        if (userRole === 'ROLE_USUARIO') {
          this.router.navigate(['/home']).then(
            () => {
              this.toastr.success('Seu perfil de agricultor foi cancelado!');
            }
          );
        } else {
          this.router.navigate(['/home']).then(
            () => {
              this.toastr.success('Seu perfil foi atualizado!');
            }
          );
        }
      },
      error: (err) => {
        this.toastr.error('Erro inesperado! Tente novamente mais tarde');
      }
    });
  }
}
