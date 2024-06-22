import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import {jwtDecode} from "jwt-decode";
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {AgricultorService} from "../../../services/agricultor.service";

interface TornarAgricultorForm {
  nomeLoja: FormControl,
  clientId: FormControl,
  clientSecret: FormControl,
}
@Component({
  selector: 'app-tornar-agricultor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './tornar-agricultor.component.html',
  styleUrl: './tornar-agricultor.component.scss'
})
export class TornarAgricultorComponent {
  tornarAgricultorForm!: FormGroup<TornarAgricultorForm>;

  constructor(private router: Router, private agricultorService: AgricultorService, private toastr: ToastrService) {
    this.tornarAgricultorForm = new FormGroup({
      nomeLoja: new FormControl(''),
      clientId: new FormControl(''),
      clientSecret: new FormControl
    });
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  submit() {
    const request = {
      nomeLoja: this.tornarAgricultorForm.value.nomeLoja,
      mercadoPagoClientId: this.tornarAgricultorForm.value.clientId,
      mercadoPagoClientSecret: this.tornarAgricultorForm.value.clientSecret
    };

    this.agricultorService.tornarAgricultor(request).subscribe({
      next: (newToken) => {
        sessionStorage.setItem('auth-token', newToken);
        const tokenPayload = jwtDecode<any>(newToken);
        const userRole = tokenPayload.role;
        if (userRole === 'ROLE_AGRICULTOR') {
          this.router.navigate(['/home-agricultor']).then(() => {
            this.toastr.success('Seu perfil agora foi atualizado para agricultor!');
          });
        } else {
          this.router.navigate(['/home']).then(() => {
            this.toastr.success('Seu perfil foi atualizado!');
          });
        }
      },
      error: (err) => {
        this.toastr.error('Erro inesperado! Tente novamente mais tarde');
      }
    });
  }

  navigate() {
    this.router.navigate(['/perfil']);
  }
}
