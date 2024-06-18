import {EnderecoDTOType} from "./endereco-dto.type";

export type RegisterRequestType = {
  telefone: string,
  email: string,
  senha: string,
  senhaConfirm: string,
  cnpj: string,
  razaoSocial: string,
  endereco: EnderecoDTOType,
  byteFoto: number[],
  typeFoto: string,
  isAgricultor: boolean;
}
