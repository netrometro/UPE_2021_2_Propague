import styles from './assets/Entrar.module.css'
import FormPropaganda from '../forms/propaganda/FormPropaganda'
function Propaganda(){
    return(
        <div>
            <div className={styles.entrar}>
                <h1>Crie sua publicidade!</h1>
                <FormPropaganda></FormPropaganda>
            </div>
        </div>

    )
}

export default Propaganda