import styles from "../assets/Form.module.css"

function Propaganda() {

    return(
        <div className={styles.form}>
      <p>Nome da sua empresa</p>
      <input
        type="text"
        placeholder="Ex.: Propague"
      />
      <p>Endereço de contato</p>
      <input
        type="text"
        placeholder="Ex.: (87) 991920341"
      />
      <p>Veiculação da mídia</p>
      <input
        type="text"
        placeholder="Ex.: Instagram"
      />
      <p>Nome do proprietário</p>
      <input
        type="text"
        placeholder="Ex.: Carlos"
      />
      <p>Motivo de sua publicidade</p>
      <input
        type="text"
        placeholder="Ex.: Promoção de fim de ano!"
      />
      <div>
        <button>Publicar</button>
      </div>
    </div>
    )
}

export default Propaganda