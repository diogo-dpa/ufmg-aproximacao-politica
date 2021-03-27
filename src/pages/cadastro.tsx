import Link from "next/link";
import { useState, useRef } from 'react';
import { TextField } from "@material-ui/core";
import styles from "../styles/pages/Cadastro.module.css";
import { validateTextField } from '../utils/validateInputs';

const Cadastro = () => {

  const [errorName, setErrorName]= useState(false);
  const [errorNameMessage, setErrorNameMessage]= useState("");

  const [errorCPF, setErrorCPF]= useState(false);
  const [errorCPFMessage, setErrorCPFMessage]= useState("");

  const [errorEmail, setErrorEmail]= useState(false);
  const [errorEmailMessage, setErrorEmailMessage]= useState("");

  const [errorPassword, setErrorPassword]= useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage]= useState("");

  const [errorConfirmPassword, setErrorConfirmPassword]= useState(false);
  const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage]= useState("");
  
  const inputName = useRef();
  const inputCPF = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();

  const handleRegisterUser = () => {
    const resultValidateName = validateTextField(inputName?.current.value);
    const resultValidateCPF = validateTextField(inputCPF?.current.value);
    const resultValidateEmail = validateTextField(inputEmail?.current.value);
    const resultValidatePassword = validateTextField(inputPassword?.current.value);
    const resultValidateConfirmPassword = validateTextField(inputConfirmPassword?.current.value);
  
    if(!resultValidateName || !resultValidateCPF ||
        !resultValidateEmail || !resultValidatePassword ||
        !resultValidateConfirmPassword
      ){

        if(!resultValidateName){
          setErrorName(true);
          setErrorNameMessage("Campo inválido");
        }else{
          setErrorName(false);
          setErrorNameMessage("");
        }

        if(!resultValidateCPF){
          setErrorCPF(true);
          setErrorCPFMessage("Campo inválido");
        }else{
          setErrorCPF(false);
          setErrorCPFMessage("");
        }

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

        if(!resultValidateConfirmPassword){
          setErrorConfirmPassword(true);
          setErrorConfirmPasswordMessage("Campo inválido");
        }else{
          setErrorConfirmPassword(false);
          setErrorConfirmPasswordMessage("");
        }
        
      }else{
        alert("Usuário cadastrado")
      }
  }

  return (
    <div className={styles.fullPage}>
      <div className={styles.cadastroContainer}>
        <h2 className={styles.registerTitle}>Cadastro</h2>

        <TextField
          variant="standard"
          label="Nome Completo"
          type="text"
          ref={inputName}
          className={styles.inputText}
          error={errorName}
          helperText={errorNameMessage}
        />

        <TextField
          variant="standard"
          label="CPF"
          type="text"
          ref={inputCPF}
          className={styles.inputText}
          error={errorCPF}
          helperText={errorCPFMessage}
        />

        <TextField
          variant="standard"
          label="Email"
          type="text"
          ref={inputEmail}
          className={styles.inputText}
          error={errorEmail}
          helperText={errorEmailMessage}
        />

        <TextField
          variant="standard"
          label="Senha"
          type="password"
          ref={inputPassword}
          className={styles.inputText}
          error={errorPassword}
          helperText={errorPasswordMessage}
        />

        <TextField
          variant="standard"
          label="Confirme sua senha"
          type="password"
          ref={inputConfirmPassword}
          className={styles.inputText}
          error={errorConfirmPassword}
          helperText={errorConfirmPasswordMessage}
        />

          <button type="button" className={styles.registerButton} onClick={handleRegisterUser}>
            <Link href="/cadastroConcluido">
              Cadastrar
            </Link>
          </button>

        <Link href="/">
          <a className={styles.logIn}>Já tenho conta</a>
        </Link>
      </div>
    </div>
  );
};

export default Cadastro;
