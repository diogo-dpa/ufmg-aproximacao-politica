import Link from "next/link";
import { useState, useRef } from 'react';
import { TextField } from "@material-ui/core";
import styles from "../styles/pages/EsqueciMinhaSenha.module.css";
import { validateTextField } from '../utils/validateInputs';

const EsqueciMinhaSenha = () => {

  const [errorEmail, setErrorEmail]= useState(false);
  const [errorEmailMessage, setErrorEmailMessage]= useState("");

  const inputEmail = useRef();

  const handleSubmit = () => {
    const resultValidateEmail = validateTextField(inputEmail?.current.value);
  
    if(!resultValidateEmail ){
        if(!resultValidateEmail){
          setErrorEmail(true);
          setErrorEmailMessage("Campo inválido");
        }else{
          setErrorEmail(false);
          setErrorEmailMessage("");
        }
      }else{
        alert("Email enviado")
      }
  }

  return (
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
          ref={inputEmail}
          error={errorEmail}
          helperText={errorEmailMessage}
          className={styles.inputText}
        />

        <button 
          type="button" 
          className={styles.sendButton} 
          onClick={handleSubmit}
        >
          <Link href="/">
            Enviar
          </Link>
        </button>

        <Link href="/">
          <a className={styles.logIn}>Já tenho conta</a>
        </Link>
      </div>
    </div> 
  )
};

export default EsqueciMinhaSenha;
