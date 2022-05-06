import styles from './assets/Entrar.module.css'
import {useState} from 'react'
import FormColaborador from '../forms/login/FormColaborador'
import FormCliente from '../forms/login/FormCliente'

import { Link } from 'react-router-dom'

function Entrar() {

    const [colaborador, setColaborador] = useState({
        tipoUsuario: false,
    })

    return(
        <div>
            <div className={styles.entrar}>
                <div className={styles.tipoUsuario}>
                    <p>Você é colaborador?</p>
                    <input 
                        type="checkbox"
                        checked={colaborador.tipoUsuario}
                        onChange={(e) =>
                            setColaborador({
                                ...colaborador,
                                tipoUsuario: e.target.checked,
                            })
                        }
                    />
                </div>
                {colaborador.tipoUsuario ? <FormColaborador/> : <FormCliente/>}
                <div className={styles.link_cadastro}>
                    <Link to="/cadastro">Ainda não é cadastrado? Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Entrar