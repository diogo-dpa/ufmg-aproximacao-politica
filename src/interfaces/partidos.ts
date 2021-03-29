interface NumerosDoPartido {
  atual: number;
  total: number;
}

interface NumerosRepresentantes {
  prefeitos: NumerosDoPartido;
  governadores: NumerosDoPartido;
  vereadores: NumerosDoPartido;
  depEstaduais: NumerosDoPartido;
  depFederais: NumerosDoPartido;
  senadores: NumerosDoPartido;
}

interface Representante {
  nome: string;
  role: string;
  estado: string;
  imgUrl: string;
  linkToRedirect: string;
}

export interface PartidoProps {
  imgUrl: string;
  nome: string;
  descricao: string;
  bandeiras: String[];
  numerosRepresentantes: NumerosRepresentantes;
  representantes: Representante[];
  gastos: {
    emReais: string;
    emPorcentagem: string;
  }
}
