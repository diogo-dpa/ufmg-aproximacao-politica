import Link from 'next/link'
import { TextField } from '@material-ui/core';
import Layout from '../components/Layout';
import styles from '../styles/pages/EsqueciMinhaSenha.module.css';

const EsqueciMinhaSenha = () => (
  <Layout title="">
    <div className={styles.forgotPasswordContainer}>

      <h2 className={styles.forgotPasswordTitle}>Esqueci minha senha</h2>
      <p className={styles.forgotPasswordDescription}>
          Digite o email cadastrado que enviaremos a solicitação de mudança de senha.
      </p>

      <TextField
        variant="outlined"
        label="Email"
        type="email"
      />

        <Link href="/home">
            <button type="button" className={styles.sendButton}>
            Enviar
            </button>
        </Link>

        <Link href="/cadastro">
            <a className={styles.logIn}>Já tenho conta</a>
        </Link>
    </div>
  </Layout>
)

export default EsqueciMinhaSenha;
