import Link from 'next/link'

import styles from '../styles/pages/CadastroConcluido.module.css';

const CadastroConcluido = () => (
      <div className={styles.concludedRegisterContainer}>

        <img className={styles.imgConcludedRegister} src="/assets/greenCheck.svg" alt="Cadastro Finalizado"/>
        <h2 className={styles.concludedRegisterTitle}>Cadastro Finalizado</h2>
        <p className={styles.concludedRegisterDescription}>
            Você já pode acessar sua conta por meio do nosso login!
        </p>

      <button type="button" className={styles.loginButton}>
        <Link href="/">
            <a >Ir para login</a>
        </Link>
      </button>
      </div>
)

export default CadastroConcluido;
