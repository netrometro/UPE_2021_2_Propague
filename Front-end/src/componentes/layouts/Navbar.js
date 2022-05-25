import styles from './assets/Navbar.module.css';

import { Link } from 'react-router-dom'

function Navbar() {

    const Hamburger = document.getElementsByClassName('hamburger')[0]
    const List = document.getElementsByClassName('list')[0]
    Hamburger.addEventListener('click', () => {
        List.classList.toggle('active')
    })

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.slogan}>
                <p>Propague</p>
            </Link>
            <a href="#" className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <ul className={styles.list}>
            <li><Link to="/faleconosco">Fale Conosco</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/entrar">Entrar</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar