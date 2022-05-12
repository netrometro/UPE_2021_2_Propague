import styles from '../assets/Form.module.css'

function FormColaborador() {
    return(
        <div>
        <div className={styles.form}>
            <h1>Entre como colaborador</h1>
            <p>Digite seu e-mail</p>
            <input type="email" placeholder="Ex.: propague@gmail.com"/>
            <p>Digite sua senha</p>
            <input type="password" placeholder="Senha" />
            <div>
                <button>Entrar como colaborador</button>
            </div>
        </div>
        </div>
    )
}

export default FormColaborador;