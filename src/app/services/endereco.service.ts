import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConsultaCepResponse} from "../types/consulta-cep-response.type";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiUrl: string = "http://localhost:8080/api/v1/endereco"

  constructor(private httpClient: HttpClient) { }

  consultaCep(cep: string) {
    return this.httpClient.get<ConsultaCepResponse>(this.apiUrl+ '/consulta-cep/' +cep);
  }

  getEndereco() {
    const authToken = sessionStorage.getItem('auth-token');
    const email = this.getCurrentUserEmail(authToken as string);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.httpClient.get<any>(this.apiUrl + "/email/" + email, {headers})
  }

  private getCurrentUserEmail(authToken: string) {
    const tokenPayload = jwtDecode<any>(authToken);
    return tokenPayload.sub;
  }
}
