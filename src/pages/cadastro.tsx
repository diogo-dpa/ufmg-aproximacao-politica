import Link from "next/link";
import { TextField } from "@material-ui/core";
import Layout from "../components/Layout";
import styles from "../styles/pages/Cadastro.module.css";

const Cadastro = () => {
  return (
    // <Layout title="">
    <div className={styles.fullPage}>
      <div className={styles.cadastroContainer}>
        <h2 className={styles.registerTitle}>Cadastro</h2>

        <TextField
          variant="standard"
          label="Nome Completo"
          type="text"
          className={styles.inputText}
        />

        <TextField
          variant="standard"
          label="CPF"
          type="text"
          className={styles.inputText}
        />

        <TextField
          variant="standard"
          label="Email"
          type="text"
          className={styles.inputText}
        />

        <TextField
          variant="standard"
          label="Senha"
          type="password"
          className={styles.inputText}
        />

        <TextField
          variant="standard"
          label="Confirme sua senha"
          type="password"
          className={styles.inputText}
        />

        <Link href="/cadastroConcluido">
          <button type="button" className={styles.registerButton}>
            Cadastrar
          </button>
        </Link>

        <Link href="/">
          <a className={styles.logIn}>Já tenho conta</a>
        </Link>
      </div>
    </div>
    // </Layout>
  );
};

export default Cadastro;
