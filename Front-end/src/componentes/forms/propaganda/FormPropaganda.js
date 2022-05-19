import styles from "../assets/Form.module.css"
import {useState} from "react"
import { Link } from 'react-router-dom'
import style from '../../paginas/assets/Propaganda.module.css'

function Propaganda() {
  const[form, setForm] = useState({
    empresa: "",
    contato: "",  
    midia: "",
    proprietario: "",
    publicidade: "",
  })

    return(
        <div className={styles.form}>
      <p>Nome da sua empresa</p>
      <input
        type="text"
        placeholder="Ex.: Propague"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            empresa: e.target.value,
          })
        }
      />
      <p>Endereço de contato</p>
      <input
        type="text"
        placeholder="Ex.: (87) 991920341"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            contato: e.target.value,
          })
        }
      />
      <p>Veiculação da mídia</p>
      <input
        type="text"
        placeholder="Ex.: Instagram"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            midia: e.target.value,
          })
        }
      />
      <p>Nome do proprietário</p>
      <input
        type="text"
        placeholder="Ex.: Carlos"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            proprietario: e.target.value,
          })
        }
      />
      <p>Motivo de sua publicidade</p>
      <input
        type="text"
        placeholder="Ex.: Promoção de fim de ano!"
        name=""
        id=""
        onChange={(e) =>
          setForm({
            ...form,
            publicidade: e.target.value,
          })
        }
      />
      <div>
        <button className={style.button}>
        <Link to="/home">Publicar</Link></button>
      </div>
    </div>
    )
}

export default Propaganda