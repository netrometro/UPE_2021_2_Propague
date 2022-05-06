import styles from '../assets/Form.module.css'

function Colaborador() {
    return(
        <div>
        <div className={styles.form}>
            <h1>Seja um colaborador!</h1>
            <p>Digite seu e-mail</p>
            <input type="email" placeholder="Ex.: propague@gmail.com"/>
            <p>Digite sua senha</p>
            <input type="password" placeholder="Senha" />
            <p>Repita sua senha</p>
            <input type="password" placeholder="Senha" />
            <div>
                <button>Cadastre-se</button>
            </div>
        </div>
        </div>
    )
}

export default Colaborador