import styles from "../assets/Form.module.css";
import { useState } from "react";

function FormColaborador() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
    tipo: "colaborador",
  });

  return (
    <div>
      <div className={styles.form}>
        <h1>Entre como colaborador</h1>
        <p>Digite seu e-mail</p>
        <input
          type="email"
          placeholder="Ex.: propague@gmail.com"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
        <p>Digite sua senha</p>
        <input
          type="password"
          name=""
          id=""
          placeholder="Senha"
          onChange={(e) =>
            setForm({
              ...form,
              senha: e.target.value,
            })
          }
        />
        <div>
          <button>Entrar como colaborador</button>
        </div>
      </div>
    </div>
  );
}

export default FormColaborador;
