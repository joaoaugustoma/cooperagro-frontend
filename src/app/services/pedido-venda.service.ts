import {Injectable} from '@angular/core';
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
      dataCriacao: dataCriacao,
      situacaoPedido: situacaoPedido,
      carrinhoCompra: carrinhoCompra
    }

    return this.http.post<any>(this.apiUrl + "/create/" + email, requestBody, {headers})
  }

  private getCurrentUserEmail(authToken: string) {
    const tokenPayload = jwtDecode<any>(authToken);
    return tokenPayload.sub;
  }

  getPreferenceId(pedidoVenda: any) {
    const authToken = sessionStorage.getItem('auth-token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.post<any>(this.apiUrl + "/mercado-pago/create-preference", pedidoVenda, {headers})
  }

  getPedidoVenda() {
    const authToken = sessionStorage.getItem('auth-token');
    const email = this.getCurrentUserEmail(authToken as string);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get<any>(this.apiUrl + "/agricultor/" + email, {headers})
  }

  iniciarEntregaPedido(id: number) {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get<any>(this.apiUrl + "/iniciar-entrega/" + id, {headers})
  }

  getUltimoPedido() {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const email = this.getCurrentUserEmail(authToken as string);

    return this.http.get<any>(this.apiUrl + "/ultimo/" + email, {headers})
  }

  getPedidosByEmailUsuario() {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const email = this.getCurrentUserEmail(authToken as string);

    return this.http.get<any>(this.apiUrl + "/all/" + email, {headers})
  }

  getPedidoVendaById(pedidoId: number) {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get<any>(this.apiUrl + "/get/" + pedidoId, {headers})
  }

  confirmarEntrega(pedidoId: number) {
    const authToken = sessionStorage.getItem('auth-token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get<any>(this.apiUrl + "/confirmar-entrega/" + pedidoId, {headers})
  }
}
