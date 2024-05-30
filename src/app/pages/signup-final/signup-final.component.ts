import {Component} from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../components/default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInputComponent} from '../../components/primary-input/primary-input.component';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {SignupService} from "../../services/signup.service";

interface SignupFinalForm {
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
  templateUrl: './signup-final.component.html',
  styleUrl: './signup-final.component.scss'
})
export class SignupFinalComponent {
  signupForm!: FormGroup<SignupFinalForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
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
    const formData = this.signupService.getFormData();
    this.signupService.register(formData).subscribe(
      response => {
        this.router.navigate(["home"])
      },
      error => {

      }
    );

  }

  navigate(){
    this.router.navigate(["signup-second"])
  }
}
