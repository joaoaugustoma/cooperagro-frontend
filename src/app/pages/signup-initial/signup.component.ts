import {Component} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInputComponent} from '../../components/primary-input/primary-input.component';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {RegisterRequestType} from "../../types/register-request.type";

interface SignupForm {
  uploadFoto: FormControl,
  telefone: FormControl,
  email: FormControl,
  senha: FormControl,
  senhaConfirm: FormControl,
  cnpj: FormControl,
  razaoSocial: FormControl,
  cep: FormControl,
  logradouro: FormControl,
  complemento: FormControl,
  numero: FormControl,
  bairro: FormControl,
  estado: FormControl,
  cidade: FormControl
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
  signupForm!: FormGroup<SignupForm>;
  typeFoto: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
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
      uploadFoto: new FormControl('')
    })
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
      uploadFoto: this.signupForm.value.uploadFoto,
      typeFoto: this.signupForm.value.uploadFoto?.type || '',
      isAgricultor: false
    };

    this.loginService.register(registerData).subscribe({
      next: () => {
        this.router.navigate(["home"]).then(r => this.toastService.success("Cadastro feito com sucesso!"));
      },
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    });
  }


  navigate(){
    this.router.navigate(["login"])
  }

  togglePasswordVisibility(input: string) {
    const inputElement = document.getElementById(input) as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validImageTypes = ['image/jpeg', 'image/png'];
      if (!validImageTypes.includes(file.type)) {
        this.toastService.error('Por favor, selecione um arquivo de imagem válido (PNG ou JPEG).');
        this.signupForm.patchValue({
          uploadFoto: null
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const byteArray = new Uint8Array(reader.result as ArrayBuffer);
        this.signupForm.patchValue({
          uploadFoto: byteArray,
        });
      };
      this.typeFoto: file.type;

    }
  }
}
