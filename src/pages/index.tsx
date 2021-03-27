import Link from "next/link";
import { useState, useRef } from 'react';
import { TextField } from "@material-ui/core";
import styles from "../styles/pages/Home.module.css";
import { validateTextField } from '../utils/validateInputs'

const Login = () => {

  const [errorEmail, setErrorEmail]= useState(false);
  const [errorEmailMessage, setErrorEmailMessage]= useState("");

  const [errorPassword, setErrorPassword]= useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage]= useState("");

  const inputEmail = useRef();
  const inputPassword = useRef();
  
  const handleRegisterUser = () => {
    const resultValidateEmail = validateTextField(inputEmail?.current.value);
    const resultValidatePassword = validateTextField(inputPassword?.current.value);
  
    if(!resultValidateEmail || !resultValidatePassword){

        if(!resultValidateEmail){
          setErrorEmail(true);
          setErrorEmailMessage("Campo inválido");
        }else{
          setErrorEmail(false);
          setErrorEmailMessage("");
        }

        if(!resultValidatePassword){
          setErrorPassword(true);
          setErrorPasswordMessage("Campo inválido");
        }else{
          setErrorPassword(false);
          setErrorPasswordMessage("");
        }
        
      }else{
        alert("Usuário válido")
      }
  }

  return (
    <div className={styles.fullPage}>
      <div className={styles.homeContainer}>
        <h2 className={styles.loginTitle}>Login</h2>

        <TextField
          variant="standard"
          label="Email"
          type="text"
          ref={inputEmail}
          error={errorEmail}
          helperText={errorEmailMessage}
          className={styles.textInput}
        />

        <TextField
          variant="standard"
          label="Senha"
          type="password"
          ref={inputPassword}
          error={errorPassword}
          helperText={errorPasswordMessage}
          className={styles.textInput}
        />

        <button 
          type="button" 
          className={styles.loginButton} 
          onClick={handleRegisterUser} 
        >
          <Link href="/home">
            Entrar
          </Link>
        </button>

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
  )
};

export default Login;
