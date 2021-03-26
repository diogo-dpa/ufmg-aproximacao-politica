import { PartidoProps } from '../src/interfaces/partidos';

export const partidoDataSample: PartidoProps[] = [
    {
    imgUrl: '/images/psolImg.jpg',
    nome: 'PSOL',
    descricao: 'O Partido Socialismo e Liberdade (PSOL), ao longo de mais de uma década de existência, tem se afirmado como a verdadeira alternativa de esquerda programática, capaz de pensar saídas efetivas para a população brasileira. Capitaneada por diversos grupos políticos, militantes socialistas e intelectuais de esquerda… LER MAIS',
    bandeiras : ['Socialismo com democracia, como princípio estratégico na superação da ordem capitalista.', 'Não há soberania, nem uma verdadeira independência nacional, sem romper com a dominação imperialista.', 'Rechaçar a conciliação de classes e apoiar as lutas dos trabalhadores.', 'Reivindicações para a luta imediata e bandeiras históricas para além da ordem.', 'A defesa de um internacionalismo ativo.'],
    numerosRepresentantes: {
        prefeitos : {
            atual: 5,
            total: 5570
        },
        governadores : {
            atual: 0,
            total: 27
        },
        vereadores : {
            atual: 89,
            total: 56810
        },
        depEstaduais : {
            atual: 18,
            total: 1024
        },
        depFederais : {
            atual: 10,
            total: 513
        },
        senadores : {
            atual: 0,
            total: 81
        },
    },
    representantes : [
        {
            nome: 'Paulo Lemos',
            role: 'Deputado Estadual',
            estado: 'AM',
        },
        {
            nome: 'David Miranda',
            role: 'Deputado Federal',
            estado: 'RJ',
        },
        {
            nome: 'Áurea Carolina',
            role: 'Deputado Federal',
            estado: 'MG',
        },
        {
            nome: 'Luiza Erundina',
            role: 'Deputado Federal',
            estado: 'SP',
        },
        {
            nome: 'Cido Sobral',
            role: 'Prefeito',
            estado: 'marabá Paulista/SP',
        },
    ]
}]