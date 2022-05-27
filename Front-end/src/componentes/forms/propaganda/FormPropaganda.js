import styles from "../assets/Form.module.css";
import { useState } from "react";
import LinkButton from '../../layouts/LinkButton'

function Propaganda() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    imagem: "",
  });

  return (
    <div className={styles.form}>
      <p>Nome do seu anúncio</p>
      <input
        type="text"
        placeholder="Ex.: Roupas do Didi"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            nome: e.target.value,
          })
        }
      />
      <p>Descrição</p>
      <input
        type="text"
        placeholder="Ex.: Roupa da marca X em perfeito estado"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            descricao: e.target.value,
          })
        }
      />
      <p>Categoria</p>
      <input
        type="text"
        placeholder="Ex.: Roupas"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            categoria: e.target.value,
          })
        }
      />
      <p>Imagem</p>
      <input
        type="file"
        placeholder="Ex.: roupa.png"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            imagem: e.target.value,
          })
        }
      />
      <div className={styles.button}>
        <LinkButton to="/propaganda" text="Criar anúncio"/>
      </div>
    </div>
  );
}

export default Propaganda;
