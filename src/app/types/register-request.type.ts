import {EnderecoDTOType} from "./endereco-dto.type";

export type RegisterRequestType = {
  telefone: string,
  email: string,
  senha: string,
  senhaConfirm: string,
  cnpj: string,
  razaoSocial: string,
  endereco: EnderecoDTOType,
  uploadFoto: string,
  typeFoto: string,
  isAgricultor: boolean;
}
