export type ProdutoDtoType = {
  titulo: string,
  descricao: string,
  precoUnitario: number,
  byteFoto: ArrayBuffer,
  typeFoto: string,
  pesoEstimado: number,
  unidadePeso: string,
  capacidadeProdutiva: number,
  unidadeCapacidade: string,
  tempoCapacidade: string,
  prazoEntrega: number,
  unidadePrazo: string,
  categoria: string,
  idAgricultor: number,
  status: boolean,
  nomeLoja?: string,
  id?: number
}
