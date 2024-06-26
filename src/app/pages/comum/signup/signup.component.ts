import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { RegisterRequestType } from "../../../types/register-request.type";
import { EnderecoService } from "../../../services/endereco.service";

interface SignupForm {
  byteFoto: FormControl;
  typeFoto: FormControl;
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
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  numeroDisabled = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private enderecoService: EnderecoService
  ) {
    this.signupForm = new FormGroup({
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
      byteFoto: new FormControl(null),
      typeFoto: new FormControl('')
    });
  }

  submit() {
    if (this.signupForm.value.senha !== this.signupForm.value.senhaConfirm) {
      this.toastService.error("As senhas não coincidem!");
      return;
    }

    if (!this.signupForm.valid) {
      this.toastService.error("Por favor, preencha todos os campos corretamente!");
      return;
    }

    const arrayBuffer = this.signupForm.value.byteFoto;
    const byteArray = new Uint8Array(arrayBuffer);
    const byteArrayList = Array.from(byteArray) as number[];

    let registerData: RegisterRequestType = {
      telefone: this.signupForm.value.telefone,
      email: this.signupForm.value.email,
      senha: this.signupForm.value.senha,
      senhaConfirm: this.signupForm.value.senhaConfirm,
      cnpj: this.signupForm.value.cnpj,
      razaoSocial: this.signupForm.value.razaoSocial,
      endereco: {
        cep: this.signupForm.value.cep,
        logradouro: this.signupForm.value.logradouro,
        complemento: this.signupForm.value.complemento,
        numero: this.signupForm.value.numero,
        bairro: this.signupForm.value.bairro,
        estado: this.signupForm.value.estado,
        cidade: this.signupForm.value.cidade,
      },
      byteFoto: byteArrayList,
      typeFoto: this.signupForm.value.typeFoto,
      isAgricultor: false
    };

    this.loginService.register(registerData).subscribe({
      next: () => {
        this.router.navigate(["login"]).then(r => this.toastService.success("Cadastro feito com sucesso!"));
      },
      error: (err) => {
        this.toastService.error("Erro inesperado! Tente novamente mais tarde");
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validImageTypes = ['image/jpeg', 'image/png'];
      if (!validImageTypes.includes(file.type)) {
        this.toastService.error('Por favor, selecione um arquivo de imagem válido (PNG ou JPEG).');
        this.signupForm.patchValue({
          byteFoto: null,
          typeFoto: null
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        this.signupForm.patchValue({
          byteFoto: arrayBuffer,
          typeFoto: file.type
        });
      };

      reader.readAsArrayBuffer(file);
    }
  }

  consultaCep(): void {
    const cep = this.signupForm.value.cep.replace(/\D/g, '');
    if (cep && cep.length === 8) {
      this.enderecoService.consultaCep(cep).subscribe(
        (endereco) => {
          if (endereco) {
            this.signupForm.patchValue({
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
      this.signupForm.patchValue({ numero: 'S/N' });
      this.numeroDisabled = true;
    } else {
      this.signupForm.patchValue({ numero: '' });
      this.numeroDisabled = false;
    }
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
