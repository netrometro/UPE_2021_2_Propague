import styles from './assets/Navbar.module.css';

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Navbar() {
    const [usuarioLogado, setUsuarioLogado] = useState(false);
    const userEmail = localStorage.getItem('emailUsuario')
    console.log(userEmail)

    useEffect(() => {
        if(userEmail){
            setUsuarioLogado(true)
        } else {
            setUsuarioLogado(false)
        }
        pegarUsuario()
    }, [])

    const pegarUsuario = () => {
        if(usuarioLogado) {
            fetch(`http://localhost:8080/api/usuario/${userEmail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('idUsuario', data.id)
                localStorage.setItem('nomeUsuario', data.nome)
            }
            )
        }
    }

    const sair = () => {
        localStorage.clear()
        setUsuarioLogado(false)
    }


    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.slogan}>
                <p>Propague</p>
            </Link>
            <ul className={styles.list}>
            <li className={styles.navItem}><Link to="/faleconosco">Fale Conosco</Link></li>
            <li className={styles.navItem}><Link to="/sobre">Sobre</Link></li>
            {usuarioLogado ? 
                <li className={styles.navItem} onClick={sair}><Link to="">Sair</Link></li> : 
                <li className={styles.navItem}><Link to="/entrar">Entrar </Link></li>}
            {/* <li className={styles.navItem}><Link to="/entrar">Entrar</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar