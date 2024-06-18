import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginResponse} from '../types/login-response.type';
import {Observable, of, tap} from 'rxjs';
import {RegisterRequestType} from "../types/register-request.type";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProdutoDtoType} from "../types/produto-dto.type";

@Injectable({
  providedIn: 'root'
})
export class SacolaService {

  private produtos: ProdutoDtoType[] = [];

  adicionarProduto(produto: ProdutoDtoType) {
    this.produtos.push(produto);
  }

  getProdutos(): ProdutoDtoType[] {
    return this.produtos;
  }
}
