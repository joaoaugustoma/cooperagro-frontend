import {Injectable} from '@angular/core';
import {ProdutoDtoType} from "../types/produto-dto.type";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class PedidoVendaService {

  apiUrl: string = "http://localhost:8080/api/v1/pedido-venda"

  constructor(private http: HttpClient) {
  }

  createPedidoVenda(carrinhoCompra: any) {
    const authToken = sessionStorage.getItem('auth-token');
    const email = this.getCurrentUserEmail(authToken as string);
    const dataCriacao = new Date();
    const situacaoPedido = "ABERTO";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const requestBody = {
      valorTotalPedido: carrinhoCompra.valorTotal,
      dataCriacao: carrinhoCompra,
      situacaoPedido: dataCriacao,
      carrinhoCompra: situacaoPedido
    }

    console.log(requestBody)

    return this.http.post<any>(this.apiUrl + "/create/" + email, {requestBody}, {headers})
  }

  private getCurrentUserEmail(authToken: string) {
    const tokenPayload = jwtDecode<any>(authToken);
    return tokenPayload.sub;
  }
}
