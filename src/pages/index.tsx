import Link from "next/link";
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { TextField } from "@material-ui/core";
import styles from "../styles/pages/Home.module.css";
import { validateTextField } from '../utils/validateInputs'

const Login = () => {

  const [errorEmail, setErrorEmail]= useState(false);
  const [errorEmailMessage, setErrorEmailMessage]= useState("");

  const [errorPassword, setErrorPassword]= useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage]= useState("");

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const router = useRouter();
  
  const handleRegisterUser = () => {
    const resultValidateEmail = validateTextField(inputEmail.current.value);
    const resultValidatePassword = validateTextField(inputPassword.current.value);
  
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

        if(inputEmail.current.value !== 'admin@email.com' || inputPassword.current.value !== 'senha123'){
          alert("Credenciais inválidas")
          inputEmail.current.value = '';
          inputPassword.current.value = '';
        }else{
          alert("Seja bem-vindo(a)!")
          router.push('/home');
        }
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
          inputRef={inputEmail}
          error={errorEmail}
          helperText={errorEmailMessage}
          className={styles.textInput}
        />

        <TextField
          variant="standard"
          label="Senha"
          type="password"
          inputRef={inputPassword}
          error={errorPassword}
          helperText={errorPasswordMessage}
          className={styles.textInput}
        />

        <button 
          type="button" 
          className={styles.loginButton} 
          onClick={handleRegisterUser} 
        >
            Entrar
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
