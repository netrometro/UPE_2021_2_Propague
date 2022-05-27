import styles from "../assets/Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../../store/Context";

function FormUsuario() {
  const { setToken } = useContext(Context);
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  }

  const handleSenha = (e) => {
    setForm({ ...form, senha: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault()

    var formLogin = []

    for (var property in form) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(form[property]);
      formLogin.push(encodedKey + "=" + encodedValue);
    }
    formLogin = formLogin.join("&");

    const responseLogin = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formLogin
    });
    const dataLogin = await responseLogin.json();
    console.log(dataLogin);

    localStorage.setItem('token', dataLogin.token_acesso)
    localStorage.setItem('emailUsuario', dataLogin.email_usuario)

    if(localStorage.getItem('token') != null){
      setToken(localStorage.getItem('token'))
      window.location.href = '/listagem'
    }




  }

  return (
    <div className={styles.form}>
      <h1>Entrar!</h1>
      <p>Digite seu e-mail</p>
      <input
        type="email"
        placeholder="Ex.: propague@gmail.com"
        value={form.email}
        onChange={handleEmail}
      />
      <p>Digite sua senha</p>
      <input
        type="password"
        name=""
        id=""
        placeholder="Senha"
        value={form.senha}
        onChange={handleSenha}
      />
      <div>
        <button onClick={submit}>Login</button>
      </div>
    </div>
  );
}

export default FormUsuario;
