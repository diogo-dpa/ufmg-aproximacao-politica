import Link from 'next/link'
import Layout from '../components/Layout';

import { ChevronLeft } from '@material-ui/icons'
import styles from '../styles/pages/CadastroConcluido.module.css';

const CadastroConcluido = () => (
  // <Layout title="">
      <div className={styles.concludedRegisterContainer}>

        <img className={styles.imgConcludedRegister} src="/assets/greenCheck.svg" alt="Cadastro Finalizado"/>
        <h2 className={styles.concludedRegisterTitle}>Cadastro Finalizado</h2>
        <p className={styles.concludedRegisterDescription}>
            Você já pode acessar sua conta por meio do nosso login!
        </p>

      <Link href="/">
          <a className={styles.logIn}>Ir para login</a>
      </Link>
      </div>
  // </Layout>
)

export default CadastroConcluido;
