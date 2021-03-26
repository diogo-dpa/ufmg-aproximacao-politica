import Link from "next/link";
import { TextField } from "@material-ui/core";
import styles from "../styles/pages/EsqueciMinhaSenha.module.css";

const EsqueciMinhaSenha = () => (
  <div className={styles.fullPage}>
    <div className={styles.forgotPasswordContainer}>
      <h2 className={styles.forgotPasswordTitle}>Esqueci minha senha</h2>
      <p className={styles.forgotPasswordDescription}>
        Digite o email cadastrado que enviaremos a solicitação de mudança de
        senha.
      </p>

      <TextField
        variant="standard"
        label="Email"
        type="email"
        className={styles.inputText}
      />

      <Link href="/">
        <button type="button" className={styles.sendButton}>
          Enviar
        </button>
      </Link>

      <Link href="/">
        <a className={styles.logIn}>Já tenho conta</a>
      </Link>
    </div>
  </div>
);

export default EsqueciMinhaSenha;
