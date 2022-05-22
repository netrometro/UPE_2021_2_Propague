import styles from './assets/Navbar.module.css';

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.slogan}>
                <p>Propague</p>
            </Link>
            <ul className={styles.list}>
            <li className={styles.navItem}><Link to="/faleconosco">Fale Conosco</Link></li>
            <li className={styles.navItem}><Link to="/sobre">Sobre</Link></li>
            <li className={styles.navItem}><Link to="/entrar">Entrar</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar