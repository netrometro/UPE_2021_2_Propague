import styles from './assets/Home.module.css';
import LinkButton from '../layouts/LinkButton'

function Home() {
    return(
        <div>
            <h1>Bem vindo ao <span>Propague</span></h1>
            <p>Anuncie seu produto e veja os anúncios de outras pessoas</p>
            <LinkButton to="/propaganda" text="Criar anúncio"/>
        </div>
    )
}

export default Home