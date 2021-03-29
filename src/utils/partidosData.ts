import { PartidoProps } from "../interfaces/partidos";

export const partidoDataSample: PartidoProps[] = [
  {
    imgUrl: "/images/mdbImg.jpg",
    nome: "MDB",
    descricao:
      "O MDB nasceu com propósitos: fazer oposição à ditadura e colaborar com a volta da Democracia. Criado a partir da extinção do pluripartidarismo, pelo Ato institucional nº 2, que instituiu o bipartidarismo, o MDB passou a incomodar quem detinha o poder. A ditadura reprimia e o MDB seguia firme. A partir das eleições de 1974, o Movimento cresceu e foi determinante na Lei de Anistia, em 1979, e nas Diretas Já, em 1984. Foi em 1974 que o MDB lançou a candidatura de Ulysses Guimarães contra o militar Ernesto Geisel. O MDB perdeu a batalha, mas saiu fortalecido para a guerra, por ter percorrido o país com os ideais democráticos.",
    bandeiras: [
      "Moralização da Vida Pública.",
      "Economia e soberania do estado.",
      "Uma nova política de renda.",
      "Integração e descentralização do desenvolvimento.",
      "Política industrial mais estratégica.",
    ],
    numerosRepresentantes: {
      prefeitos: {
        atual: 784,
        total: 5570,
      },
      governadores: {
        atual: 3,
        total: 27,
      },
      vereadores: {
        atual: 89,
        total: 56810,
      },
      depEstaduais: {
        atual: 93,
        total: 1024,
      },
      depFederais: {
        atual: 34,
        total: 513,
      },
      senadores: {
        atual: 15,
        total: 81,
      },
    },
    representantes: [
      {
        nome: "Alceu Moreira",
        role: "Deputado Federal",
        estado: "RS",
        imgUrl: "/images/alceuMoreira.jpg",
        linkToRedirect: "/representantes/AlceuMoreira"
      },
      {
        nome: "Dulce Miranda",
        role: "Deputado Federal",
        estado: "TO",
        imgUrl: "/images/dulceMiranda.jpg",
        linkToRedirect: "/representantes/DulceMiranda"
      },
      {
        nome: "Bruno Covas",
        role: "Prefeito",
        estado: "SP",
        imgUrl: "/images/brunoCovas.jpg",
        linkToRedirect: "/representantes/BrunoCovas"
      },
      {
        nome: "Ibanis Rocha",
        role: "Governador",
        estado: "DF",
        imgUrl: "/images/ibanisRocha.jpg",
        linkToRedirect: "/representantes/IbanisRocha"
      },
      {
        nome: "Jader Barbalho",
        role: "Senador",
        estado: "PA",
        imgUrl: "/images/jaderBarbalho.jpg",
        linkToRedirect: "/representantes/JaderBarbalho"
      },
    ],
    gastos: {
      emReais: "944,0M",
      emPorcentagem: "12,2"
    }
  },
  {
    imgUrl: "/images/psolImg.jpg",
    nome: "PSOL",
    descricao:
      "O Partido Socialismo e Liberdade (PSOL), ao longo de mais de uma década de existência, tem se afirmado como a verdadeira alternativa de esquerda programática, capaz de pensar saídas efetivas para a população brasileira. Capitaneada por diversos grupos políticos, militantes socialistas e intelectuais de esquerda… LER MAIS",
    bandeiras: [
      "Socialismo com democracia, como princípio estratégico na superação da ordem capitalista.",
      "Não há soberania, nem uma verdadeira independência nacional, sem romper com a dominação imperialista.",
      "Rechaçar a conciliação de classes e apoiar as lutas dos trabalhadores.",
      "Reivindicações para a luta imediata e bandeiras históricas para além da ordem.",
      "A defesa de um internacionalismo ativo.",
    ],
    numerosRepresentantes: {
      prefeitos: {
        atual: 5,
        total: 5570,
      },
      governadores: {
        atual: 0,
        total: 27,
      },
      vereadores: {
        atual: 89,
        total: 56810,
      },
      depEstaduais: {
        atual: 18,
        total: 1024,
      },
      depFederais: {
        atual: 10,
        total: 513,
      },
      senadores: {
        atual: 0,
        total: 81,
      },
    },
    representantes: [
      {
        nome: "Paulo Lemos",
        role: "Deputado Estadual",
        estado: "AM",
        imgUrl: "/images/pauloLemos.jpg",
        linkToRedirect: "/representantes/PauloLemos"
      },
      {
        nome: "David Miranda",
        role: "Deputado Federal",
        estado: "RJ",
        imgUrl: "/images/davidMiranda.jpg",
        linkToRedirect: "/representantes/DavidMiranda"
      },
      {
        nome: "Áurea Carolina",
        role: "Deputado Federal",
        estado: "MG",
        imgUrl: "/images/aureaCarolina.jpg",
        linkToRedirect: "/representantes/AureaCarolina"
      },
      {
        nome: "Luiza Erundina",
        role: "Deputado Federal",
        estado: "SP",
        imgUrl: "/images/luizaErundina.jpg",
        linkToRedirect: "/representantes/LuizaErundina"
      },
      {
        nome: "Cido Sobral",
        role: "Prefeito",
        estado: "Marabá Paulista/SP",
        imgUrl: "/images/cidoSobral.jpg",
        linkToRedirect: "/representantes/CidoSobral"
      },
    ],
    gastos: {
      emReais: "521,2M",
      emPorcentagem: "2,7"
    }
  }
];
