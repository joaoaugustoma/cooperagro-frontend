import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PrimaryInputComponent} from "../../components/primary-input/primary-input.component";
import {AgricultorService} from "../../services/agricultor.service";
import { ToastrService } from 'ngx-toastr';
import {jwtDecode} from "jwt-decode";

interface TornarAgricultorForm {
  nomeLoja: FormControl
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
      nomeLoja: new FormControl('')
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  submit() {
    this.agricultorService.tornarAgricultor(this.tornarAgricultorForm.value.nomeLoja).subscribe({
      next: (newToken) => {
        sessionStorage.setItem('auth-token', newToken);
        const tokenPayload = jwtDecode<any>(newToken);
        const userRole = tokenPayload.role;

        if (userRole === 'ROLE_AGRICULTOR') {
          this.router.navigate(['/home-agricultor']).then(
            () => {
              this.toastr.success('Seu perfil agora foi atualizado para agricultor!');
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
      error: () => this.toastr.error('Erro inesperado! Tente novamente mais tarde')
    });
  }

  navigate() {
    this.router.navigate(['/perfil']);
  }
}
