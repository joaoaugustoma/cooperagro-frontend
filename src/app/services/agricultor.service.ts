import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";
import {TornarAgricultorDtoType} from "../types/tornar-agricultor-dto.type";

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {

  apiUrl: string = "http://localhost:8080/api/v1/agricultor"

  constructor(private http: HttpClient) { }

  tornarAgricultor(nomeLoja: string) {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const email = this.getCurrentUserEmail(authToken as string);
    let tornarAgricultorDto : TornarAgricultorDtoType = { email, nomeLoja };

    return this.http.put(`${this.apiUrl}/tornar-agricultor`, tornarAgricultorDto, {
      headers,
      responseType: 'text'
    });
  }

  private getCurrentUserEmail(authToken: string) {
    const tokenPayload = jwtDecode<any>(authToken);
    return tokenPayload.sub;
  }

  cancelarAgricultor() {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const email = this.getCurrentUserEmail(authToken as string);
    console.log(email)
    return this.http.put(`${this.apiUrl}/cancelar-agricultor`, { email }, {
      headers,
      responseType: 'text'
    });
  }

}