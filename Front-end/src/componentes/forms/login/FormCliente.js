import styles from '../assets/Form.module.css';

function FormCliente() {
    return(
        <div className={styles.form}>
            <h1>Entre como cliente</h1>
            <p>Digite seu e-mail</p>
            <input type="email" placeholder="Ex.: propague@gmail.com"/>
            <p>Digite sua senha</p>
            <input type="password" name="" id="" placeholder="Senha" />
            <div>
                <button>Entrar como cliente</button>
            </div>
        </div>
    )
}

export default FormCliente;