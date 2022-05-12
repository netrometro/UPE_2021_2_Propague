import styles from "../assets/Form.module.css";
import { useState } from "react";
function FormCliente() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
    tipo: "cliente",
  });

  return (
    <div className={styles.form}>
      <h1>Entre como cliente</h1>
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
        <button>Entrar como cliente</button>
      </div>
    </div>
  );
}

export default FormCliente;
