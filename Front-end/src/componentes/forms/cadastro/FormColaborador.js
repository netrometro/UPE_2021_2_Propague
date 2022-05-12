import styles from "../assets/Form.module.css";
import {useState} from "react"

function Colaborador() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
    senhaRepetida: "",
    tipo: "colaborador",
  });

  return (
    <div>
      <div className={styles.form}>
        <h1>Seja um colaborador!</h1>
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
        <p>Repita sua senha</p>
        <input
          type="password"
          name=""
          id=""
          placeholder="Senha"
          onChange={(e) =>
            setForm({
              ...form,
              senhaRepetida: e.target.value,
            })
          }
        />
        <div>
          <button>Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}

export default Colaborador;
