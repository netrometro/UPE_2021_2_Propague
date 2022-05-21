import styles from './assets/FaleConosco.module.css'
import { Link } from 'react-router-dom'

function FaleConosco() {
    return (
        <div className={styles.centride}>
            <h1>Fale Conosco</h1>
            <div className={styles.info}>
      <p>Olá! Somos gratos por sua presença.</p>
      <p>O nosso endereço de contato é Propague@gmail.com</p>
      <p>Quaisquer dúvidas ou problemas, é só nos contatar.
       Nós, do Propague, ficaremos felizes em te atender.</p>

      <div>
      <Link to="/"> <button className={styles.button}>
      Voltar para a tela inicial
       </button></Link>
      </div>
    </div>
        </div>
    )
}

export default FaleConosco
