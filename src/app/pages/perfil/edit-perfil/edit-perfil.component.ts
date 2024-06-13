import { Component } from '@angular/core';
import {DefaultLoginLayoutComponent} from "../../../components/default-login-layout/default-login-layout.component";
import {PrimaryInputComponent} from "../../../components/primary-input/primary-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";
import {ToastrService} from "ngx-toastr";
import {EnderecoService} from "../../../services/endereco.service";

interface EditForm {
  telefone: FormControl;
  email: FormControl;
  senha: FormControl;
  senhaConfirm: FormControl;
  cnpj: FormControl;
  razaoSocial: FormControl;
  cep: FormControl;
  logradouro: FormControl;
  complemento: FormControl;
  numero: FormControl;
  bairro: FormControl;
  estado: FormControl;
  cidade: FormControl;
}

@Component({
  selector: 'app-edit-perfil',
  standalone: true,
    imports: [
        DefaultLoginLayoutComponent,
        PrimaryInputComponent,
        ReactiveFormsModule
    ],
  templateUrl: './edit-perfil.component.html',
  styleUrl: './edit-perfil.component.scss'
})
export class EditPerfilComponent {
  editForm!: FormGroup<EditForm>;
  numeroDisabled = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private enderecoService: EnderecoService
  ) {
    this.editForm = new FormGroup({
      telefone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      senhaConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cnpj: new FormControl('', [Validators.required, Validators.minLength(14)]),
      razaoSocial: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required, Validators.minLength(8)]),
      logradouro: new FormControl('', [Validators.required]),
      complemento: new FormControl(''),
      numero: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
    });
  }

  navigateToPerfil() {
    this.router.navigate(['/perfil']);
  }

  consultaCep(): void {
    const cep = this.editForm.value.cep.replace(/\D/g, '');
    if (cep && cep.length === 8) {
      this.enderecoService.consultaCep(cep).subscribe(
        (endereco) => {
          if (endereco) {
            this.editForm.patchValue({
              logradouro: endereco.logradouro,
              complemento: endereco.complemento,
              bairro: endereco.bairro,
              estado: endereco.uf,
              cidade: endereco.localidade
            });
          }
        },
        (error) => {
          this.toastService.error('Erro ao consultar CEP.');
        }
      );
    } else {
      this.toastService.error('CEP inválido.');
    }
  }

  setSemNumero(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.editForm.patchValue({ numero: 'S/N' });
      this.numeroDisabled = true;
    } else {
      this.editForm.patchValue({ numero: '' });
      this.numeroDisabled = false;
    }
  }

  submit() {

  }
}
