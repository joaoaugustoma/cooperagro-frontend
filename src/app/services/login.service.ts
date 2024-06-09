import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginResponse} from '../types/login-response.type';
import {Observable, of, tap} from 'rxjs';
import {RegisterRequestType} from "../types/register-request.type";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/api/v1/auth"

  constructor(private httpClient: HttpClient,
              private router: Router
  ) { }

  login(email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, senha }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.authToken)
        sessionStorage.setItem("nome", value.nomeRazaoSocial)
        sessionStorage.setItem("is-agricultor", value.isAgricultor)
      })
    )
  }

  register(registerData: RegisterRequestType): Observable<any> {
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/registro", registerData);
  }


  logout() {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("nome");
  }
}
