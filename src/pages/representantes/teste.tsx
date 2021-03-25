import Link from 'next/link'

import { GetStaticProps } from 'next'
import styles from '../../styles/pages/Representantes.module.css';

const representanteData = [
    {
        imgUrlPessoa: '/images/aureaCarolina.jpg',
        imgUrlPartido: '/images/psolImg.jpg',
        nome: 'Áurea Carolina',
        role: 'Deputado Estadual',
        estado: 'MG',
        descricao: 'Áurea Carolina é educadora popular, especialista em gênero e igualdade pela Universidade Autônoma de Barcelona, mestra em ciência política pela UFMG e Deputada Federal eleita. Em 2016, foi candidata a vereadora em Belo Horizonte pelas Muitas/PSOL, se elegeu com a maior votação da cidade: 17.420 votos.',
    }
]


interface RepresentanteProps{
    imgUrlPessoa: string;
    imgUrlPartido: string;
    nome: string;
    role: string;
    estado: string;
    descricao: string;
}

const Representante = ({imgUrlPessoa, imgUrlPartido, nome, role, estado, descricao} : RepresentanteProps) => { 

    return (
    // <Layout title="Home | Next.js + TypeScript Example">
    <div className={styles.fullPage}>
        <div className={styles.pessoaContainer}>
            <div className={styles.infoPartido}>
                <img className={styles.imgPessoa} src={imgUrlPessoa} alt={nome} />
                <img className={styles.imgPartido} src={imgUrlPartido} alt={nome} />

                <strong className={styles.nomePessoa}>{nome}</strong>

                <span className={styles.roleAndState}>{role} {estado}</span>
                <p className={styles.descricaoPartido}>{descricao}</p>

            </div>
        </div>

        <div className={styles.areaInProgress}>
            <h3 className={styles.titleAreaInProgress}>Gastos</h3>
            <div className={styles.emptyArea}>
                Em desenvolvimento
            </div>
        </div>

        <div className={styles.areaInProgress}>
            <h3 className={styles.titleAreaInProgress}>Jurídico</h3>
            <div className={styles.emptyArea}>
                Em desenvolvimento
            </div>
        </div>

        <div className={styles.areaInProgress}>
            <h3 className={styles.titleAreaInProgress}>Viagens</h3>
            <div className={styles.emptyArea}>
                Em desenvolvimento
            </div>
        </div>


    </div>
    // </Layout>
    )
};

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            ...representanteData[0],
        },
      }
  }

export default Representante;
