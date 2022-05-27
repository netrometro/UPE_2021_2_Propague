import styles from './assets/Home.module.css';
import LinkButton from '../layouts/LinkButton'
import img from '../../img/img-home.webp'

function Home() {
    return(
        <div className={styles.home_container}>
            <h1>Bem vindo ao <span>Propague</span></h1>
            <p>Anuncie seu produto e veja os anúncios de outras pessoas</p>
            <LinkButton to="/propaganda" text="Criar anúncio"/>
            <img src={img} alt="Propague" />
        </div>
    )
}

export default Home