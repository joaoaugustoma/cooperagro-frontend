import {Injectable} from '@angular/core';
import {ProdutoDtoType} from "../types/produto-dto.type";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class SacolaService {

  apiUrl: string = "http://localhost:8080/api/v1/carrinho-compra"

  constructor(private http: HttpClient) { }

  adicionarProduto(produto: ProdutoDtoType) {
    const authToken = sessionStorage.getItem('auth-token');
    const email = this.getCurrentUserEmail(authToken as string);
    const produtoId  = produto!.id;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<any>(this.apiUrl + "/add-produto", { produtoId , email }, {headers})
  }

  private getCurrentUserEmail(authToken: string) {
    const tokenPayload = jwtDecode<any>(authToken);
    return tokenPayload.sub;
  }
}
