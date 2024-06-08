import {EnderecoDTOType} from "./endereco-dto.type";

export type RegisterRequestType = {
  telefone: string,
  email: string,
  senha: string,
  senhaConfirm: string,
  cnpj: string,
  razaoSocial: string,
  endereco: EnderecoDTOType,
  uploadFoto: Uint8Array,
  typeFoto: string,
  isAgricultor: boolean;
}
