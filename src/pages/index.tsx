import Link from 'next/link'
import { TextField } from '@material-ui/core';
import Layout from '../components/Layout';
import styles from '../styles/pages/Home.module.css';

const IndexPage = () => (
  // <Layout title="Home | Next.js + TypeScript Example">
  <div className={styles.fullPage}>
      <h1 className={styles.mainTitle}>Bem vindo ao Aproximação Política</h1>
      <div className={styles.homeContainer}>

        <h2 className={styles.loginTitle}>Login</h2>

        <TextField
          variant="outlined"
          label="Email"
          type="text"
          className={styles.textInput}
          />

        <TextField
          variant="outlined"
          label="Senha"
          type="password"
          className={styles.textInput}
        />

          <Link href="/home">
            <button type="button" className={styles.loginButton}>
              Entrar
            </button>
          </Link>

          <div className={styles.usefulLink}>
            <Link href="/esqueciminhasenha">
              <a className={styles.forgotPassword}>Esqueci minha senha</a>
            </Link>
            <Link href="/cadastro">
              <a className={styles.signUp}>Não tenho conta</a>
            </Link>
          </div>
      </div>
  </div>
  // </Layout>
)

export default IndexPage;
