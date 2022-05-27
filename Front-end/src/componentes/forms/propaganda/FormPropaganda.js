import styles from "../assets/Form.module.css";
import { useState } from "react";
import LinkButton from '../../layouts/LinkButton'

function Propaganda() {
  const idUsuario = localStorage.getItem("idUsuario");
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    usuario_id: idUsuario,
  });

  const handleNome = (e) => {
    setForm({
      ...form,
      nome: e.target.value,
    });
  };

  const handleDescricao = (e) => {
    setForm({
      ...form,
      descricao: e.target.value,
    });
  };

  const handleImagem = (e) => {
    setForm({
      ...form,
      imagem: "https://via.placeholder.com/150",
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/midia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    console.log(response);
  }

  return (
    <div className={styles.form}>
      <p>Nome do seu anúncio</p>
      <input
        type="text"
        placeholder="Ex.: Roupas do Didi"
        name=""
        id=""
        onChange={handleNome}
        value={form.nome}
      />
      <p>Descrição</p>
      <input
        type="text"
        placeholder="Ex.: Roupa da marca X em perfeito estado"
        name=""
        id=""
        onChange={handleDescricao}
        value={form.descricao}
      />
    
      <p>Imagem</p>
      <input
        type="file"
        placeholder="Ex.: roupa.png"
        name=""
        id=""
        onChange={handleImagem}
        value={form.imagem}
      />
      <div className={styles.button} onClick={submit}>
        <LinkButton to="/" text="Criar anúncio"/>
      </div>
    </div>
  );
}

export default Propaganda;
