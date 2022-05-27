import styles from "../assets/Form.module.css";
import { useState } from "react";

function FormUsuario() {
  return (
    <div className={styles.form}>
      <h1>Seja um cliente!</h1>
      <p>Digite seu e-mail</p>
      <input
        type="email"
        placeholder="Ex.: propague@gmail.com"
      />
      <p>Digite sua senha</p>
      <input
        type="password"
        name=""
        id=""
        placeholder="Senha"
      />
      <p>Repita sua senha</p>
      <input
        type="password"
        name=""
        id=""
        placeholder="Senha"
      />
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default FormUsuario;
