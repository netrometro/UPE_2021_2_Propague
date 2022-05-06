import styles from './assets/Entrar.module.css'
import {useState} from 'react'
import FormColaborador from '../forms/cadastro/FormColaborador'
import FormCliente from '../forms/cadastro/FormCliente'

function Cadastro() {

    const [colaborador, setColaborador] = useState({
        tipoUsuario: false,
    })

    return(
        <div>
            <div className={styles.entrar}>
                <div className={styles.tipoUsuario}>
                    <p>Cadastrar-se como colaborador?</p>
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
            </div>
        </div>
    )
}

export default Cadastro