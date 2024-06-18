import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConsultaCepResponse} from "../types/consulta-cep-response.type";
import {ProdutoDtoType} from "../types/produto-dto.type";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl: string = "http://localhost:8080/api/v1/produto"

  constructor(private httpClient: HttpClient) { }

  createProduto(produto: ProdutoDtoType) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("auth-token")}`
    });

    return this.httpClient.post(this.apiUrl, produto, {headers});
  }

  editProduto(produto: ProdutoDtoType) {
    return this.httpClient.put(this.apiUrl, produto);
  }

  getProdutos() {
    return this.httpClient.get(this.apiUrl);
  }

  getProdutoById(id: number) {
    return this.httpClient.get(this.apiUrl + '/' + id);
  }
}
