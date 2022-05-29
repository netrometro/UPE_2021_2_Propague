import styles from "../assets/Form.module.css";
import {useState} from "react"

function FormUsuario() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
    tipos: [
      {
        "id": 9,
        "nome": "Cliente",
      }
    ]
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:8080/api/usuario/salvar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then(response => response.json())
    .then(data => {
      window.alert("Usuário cadastrado com sucesso!")
      console.log(data);
    })



  };

  return (
    <div>
      <div className={styles.form}>
        <h1>Cadastre-se</h1>
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
          <button onClick={handleRegister}>Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}

export default FormUsuario;
