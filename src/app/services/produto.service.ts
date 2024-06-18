import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConsultaCepResponse} from "../types/consulta-cep-response.type";
import {ProdutoDtoType} from "../types/produto-dto.type";
import {Observable} from "rxjs";
import {AgricultorService} from "./agricultor.service";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl: string = "http://localhost:8080/api/v1/produto"

  constructor(private httpClient: HttpClient, private agricultorService: AgricultorService) { }

  createProduto(produto: ProdutoDtoType) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("auth-token")}`
    });

    return this.httpClient.post(this.apiUrl, produto, {headers});
  }

  editProduto(produto: ProdutoDtoType) {
    return this.httpClient.put(this.apiUrl, produto);
  }

  getProdutos(idAgricultor: number): Observable<ProdutoDtoType[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("auth-token")}`
    });

    return this.httpClient.get<ProdutoDtoType[]>(`${this.apiUrl}/listar/${idAgricultor}`, {headers});
  }

  getProdutoById(id: number): Observable<ProdutoDtoType> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("auth-token")}`
    });
    return this.httpClient.get<ProdutoDtoType>(`${this.apiUrl}/${id}`, {headers});
  }

  getProdutosByCategoria(categoria: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem("auth-token")}`
    });

    return this.httpClient.get<ProdutoDtoType[]>(`${this.apiUrl}/categoria/${categoria}`, {headers});
  }
}
