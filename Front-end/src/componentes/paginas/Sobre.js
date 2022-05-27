import styles from "./assets/Sobre.module.css";
import LinkButton from "../layouts/LinkButton";

function Sobre() {
  return (
    <div className={styles.sobre_container}>
      <h1>Sobre o projeto</h1>
      <p>
        Esse projeto foi construído em uma disciplina de gerência e configuração
        do curso de Engenharia de Software da UPE-Garanhuns.
      </p>
      <h2>Alunos</h2>
      <p>
        José Ferreira dos Santos Júnior, Gabriel Rodrigues Tavares de Lima e Emílio.
      </p>
      <h2>Orientador</h2>
      <p>Ewerton Medonça.</p>
      <LinkButton to="" text="Acessar repositório do projeto" />
    </div>
  );
}

export default Sobre;
