import styles from './assets/Navbar.module.css';

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.slogan}>
                <p>Propague</p>
            </Link>
            <ul className={styles.list}>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/entrar">Entrar</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar