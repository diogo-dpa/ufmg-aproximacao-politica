import Link from 'next/link'

import { GetStaticProps } from 'next'
import styles from '../../styles/pages/Partidos.module.css';

import PoliticalPartyData from '../../components/PoliticalPartyData';
import RepresentativePersonCard from '../../components/RepresentativePersonCard';
import FlagIcon from '@material-ui/icons/Flag';

const partidoData = [
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

interface NumerosDoPartido{
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
}

interface PartidoProps{
    imgUrl: string;
    nome: string;
    descricao: string;
    bandeiras: String[];
    numerosRepresentantes: NumerosRepresentantes,
    representantes : Representante[];
}

const Partido = ({imgUrl, nome, descricao, bandeiras, numerosRepresentantes, representantes} : PartidoProps) => { 

    return (
    // <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.fullPage}>
        <div className={styles.partidoContainer}>
            <div className={styles.infoPartido}>
                <img className={styles.imgPartido} src={imgUrl} alt={nome} />
                <strong className={styles.nomePartido}>{nome}</strong>

                <p>{descricao}</p>

                <ul className={styles.bandeirasPart}>
                    {
                        bandeiras?.map( (item, index) => (
                            <li key={index} className={styles.listItem}>
                                <FlagIcon />
                                <span className={styles.descricaoBandeira}>{item}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        <div className={styles.partidoContainer}>
            <h2 className={styles.titleRepresentantes} >Representantes</h2>

            <div className={styles.partidoNumber}>
                <PoliticalPartyData 
                    currentNumber={numerosRepresentantes.prefeitos.atual} 
                    totalNumber={numerosRepresentantes.prefeitos.total} 
                    label="Prefeitos"
                />
                <PoliticalPartyData 
                    currentNumber={numerosRepresentantes.governadores.atual} 
                    totalNumber={numerosRepresentantes.governadores.total} 
                    label="Governadores"
                />
                <PoliticalPartyData 
                    currentNumber={numerosRepresentantes.vereadores.atual} 
                    totalNumber={numerosRepresentantes.vereadores.total} 
                    label="Vereadores"
                />
                <PoliticalPartyData 
                    currentNumber={numerosRepresentantes.depEstaduais.atual} 
                    totalNumber={numerosRepresentantes.depEstaduais.total} 
                    label="Dep. Estaduais"
                />
                <PoliticalPartyData 
                    currentNumber={numerosRepresentantes.depFederais.atual} 
                    totalNumber={numerosRepresentantes.depFederais.total} 
                    label="Dep. Federais"
                />
                <PoliticalPartyData 
                    currentNumber={numerosRepresentantes.senadores.atual} 
                    totalNumber={numerosRepresentantes.senadores.total} 
                    label="Senadores"
                />
            </div>
        </div>

        <div className={styles.partidoContainer}>
            {
                representantes.map(item => (
                    <RepresentativePersonCard 
                        imgUrl=""
                        linkToRedirect=""
                        personName={item.nome}
                        role={item.role}
                        state={item.estado}
                    />
                ))
            }
        </div>
    </div>
    // </Layout>
    )
};

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            ...partidoData[0],
        },
      }
  }

export default Partido;
