import styles from './assets/Entrar.module.css'
import FormUsuario from '../forms/cadastro/FormUsuario'

function Cadastro() {
    return(
        <div>
            <div className={styles.entrar}>
                <FormUsuario/>
            </div>
        </div>
    )
}

export default Cadastro