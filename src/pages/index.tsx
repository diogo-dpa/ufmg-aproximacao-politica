import Link from "next/link";
import { TextField } from "@material-ui/core";
import styles from "../styles/pages/Home.module.css";

const Login = () => (
  <div className={styles.fullPage}>
    <div className={styles.homeContainer}>
      <h2 className={styles.loginTitle}>Login</h2>

      <TextField
        variant="standard"
        label="Email"
        type="text"
        className={styles.textInput}
      />

      <TextField
        variant="standard"
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
);

export default Login;
