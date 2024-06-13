import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginResponse} from '../types/login-response.type';
import {Observable, of, tap} from 'rxjs';
import {RegisterRequestType} from "../types/register-request.type";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:8080/api/v1/auth"

  constructor(private httpClient: HttpClient,
              private router: Router,
              private toastr: ToastrService
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
    sessionStorage.removeItem("is-agricultor");
  }

  getNomeUsuario() {
    return sessionStorage.getItem("nome");
  }

  getUserData(): Observable<any> {
    const authToken = sessionStorage.getItem("auth-token");
    if (!authToken) {
      this.router.navigate(['/login']).then(() => {
        this.toastr.error("Token de autenticação expirado!")
      });
      return of(null);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.get<any>(this.apiUrl + "/me", { headers });
  }

  updateUserData(userData: any): Observable<any> {
    const authToken = sessionStorage.getItem("auth-token");
    if (!authToken) {
      this.router.navigate(['/login']);
      return of(null);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.put<any>(this.apiUrl + "/me", userData, { headers }).pipe(
      tap(() => {
        if (userData.nomeRazaoSocial) {
          sessionStorage.setItem("nome", userData.nomeRazaoSocial);
          if(userData.authToken) sessionStorage.setItem("auth-token", userData.authToken);
        }
      })
    );
  }
}
