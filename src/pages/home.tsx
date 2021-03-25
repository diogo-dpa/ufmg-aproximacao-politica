
import Layout from '../components/Layout';
import styles from '../styles/pages/LoggedHome.module.css';

import { GetStaticProps } from 'next'
import FamousPoliticalCard from '../components/FamousPoliticalCard'
import MenuMobile from '../components/MenuMobile'

const politicalParties = [
    {
        imgUrl: "/images/psolImg.jpg",
        linkToRedirect: "/partidos/teste"
    },
    {
        imgUrl: "/images/ptImg.png",
        linkToRedirect: "/partidos/psol"
    },
    {
        imgUrl: "/images/psdbImg.png",
        linkToRedirect: "/partidos/psol"
    },
    {
        imgUrl: "/images/mdbImg.jpg",
        linkToRedirect: "/partidos/psol"
    },
]

interface PoliticalPartyImgInfo{
  imgUrl: string;
  linkToRedirect: string;
}

interface LoggedHomeProps{
  politicalParties: PoliticalPartyImgInfo[];
}

const LoggedHome = ({ politicalParties }: LoggedHomeProps ) => {
  return (
    // <Layout title="">
    <div className={styles.fullPage}>
      <MenuMobile />
      <h1 className={styles.mainTitle}>Acompanhe o dia a dia na política</h1>

      <div className={styles.famousPoliticalPartiesContainer}>

        <span className={styles.famousPartiesTitle}>Últimos partidos acessados</span>
        
        <div className={styles.famousPartiesSection}>
            {   
                politicalParties.map(item => (
                    <FamousPoliticalCard imgUrl={item.imgUrl} linkToRedirect={item.linkToRedirect} />
                ))
            }
        </div>

      </div>
    </div>
  // </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

  return {
      props: {
          politicalParties,
      },
    }
}

export default LoggedHome;