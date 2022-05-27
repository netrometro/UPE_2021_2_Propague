import styles from './assets/Entrar.module.css'
import FormUsuario from '../forms/login/FormUsuario'

import { Link } from 'react-router-dom'

function Entrar() {
    return(
        <div>
            <div className={styles.entrar}>
                <FormUsuario/>
                <div className={styles.link_cadastro}>
                    <Link to="/cadastro">Ainda não é cadastrado? Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Entrar