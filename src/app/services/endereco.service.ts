import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginResponse} from '../types/login-response.type';
import {Observable, of, tap} from 'rxjs';
import {RegisterRequestType} from "../types/register-request.type";
import {ConsultaCepResponse} from "../types/consulta-cep-response.type";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiUrl: string = "http://localhost:8080/api/v1/endereco"

  constructor(private httpClient: HttpClient) { }

  consultaCep(cep: string) {
    return this.httpClient.get<ConsultaCepResponse>(this.apiUrl+ '/consulta-cep/' +cep);
  }
}
