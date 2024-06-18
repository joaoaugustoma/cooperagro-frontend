import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DefaultLoginLayoutComponent} from "../../../../components/default-login-layout/default-login-layout.component";
import {PrimaryInputComponent} from "../../../../components/primary-input/primary-input.component";
import {LoginService} from "../../../../services/login.service";
import {EnderecoService} from "../../../../services/endereco.service";

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
export class EditPerfilComponent implements OnInit {
  editForm!: FormGroup<EditForm>;
  numeroDisabled = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private enderecoService: EnderecoService
  ) {
    this.editForm = new FormGroup({
      telefone: new FormControl('', [ Validators.minLength(3)]),
      email: new FormControl('', [ Validators.email]),
      senha: new FormControl(''),
      senhaConfirm: new FormControl(''),
      cnpj: new FormControl('', [ Validators.minLength(14)]),
      razaoSocial: new FormControl(''),
      cep: new FormControl('', [ Validators.minLength(8)]),
      logradouro: new FormControl(''),
      complemento: new FormControl(''),
      numero: new FormControl(''),
      bairro: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl('')
    });
  }

  ngOnInit(): void {
    const userData = this.loginService.getUserData() as any;
    this.editForm.patchValue(userData);
  }

  navigateToPerfil() {
    this.router.navigate(["perfil"]);
  }

  submit() {
    if (this.editForm.invalid) {
      this.toastService.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    this.loginService.updateUserData(this.editForm.value).subscribe({
      next: () => {
        this.toastService.success("Perfil atualizado com sucesso!");
      },
      error: () => {
        this.toastService.error("Erro inesperado! Tente novamente mais tarde.");
      }
    });
  }

  consultaCep(): void {
    const cep = this.editForm.value.cep.replace(/\D/g, '');
    if (cep && cep.length === 8) {
      this.enderecoService.consultaCep(cep).subscribe(
        endereco => {
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
        () => {
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
}
