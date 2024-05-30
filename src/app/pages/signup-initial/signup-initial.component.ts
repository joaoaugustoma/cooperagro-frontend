import {Component} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInputComponent} from '../../components/primary-input/primary-input.component';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {SignupService} from "../../services/signup.service";

interface SignupInitialForm {
  telefone: FormControl,
  email: FormControl,
  senha: FormControl,
  senhaConfirm: FormControl
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
  templateUrl: './signup-initial.component.html',
  styleUrl: './signup-initial.component.scss'
})
export class SignupInitialComponent {
  signupForm!: FormGroup<SignupInitialForm>;

  constructor(
    private router: Router,
    private signupService: SignupService,
    private toastService: ToastrService
  ){
    this.signupForm = new FormGroup({
      telefone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      senhaConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    if (this.signupForm.valid) {
      this.signupService.setFormData(this.signupForm.value);
      this.router.navigate(['signup-second']);
    }
  }

  navigate(){
    this.router.navigate(["login"])
  }

  togglePasswordVisibility(input: string) {
    const inputElement = document.getElementById(input) as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
  }
}
