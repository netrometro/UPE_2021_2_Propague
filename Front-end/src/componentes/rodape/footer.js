import React from "react";
import styles from "../rodape/Rodape.module.css"



const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.Container}>
            <div className={styles.Row}>
            <div className={styles.Column}>
            <div className={styles.Heading}>Contato</div>
            <div className={styles.margin}>
            <a className={styles.link} href="/faleconosco">fale conosco</a></div>
            </div>

            <div className={styles.Column}>
            <div className={styles.Heading}>Sobre</div>
            <div className={styles.margin}>
            <a className={styles.link} href="/sobre">sobre nós</a>
            </div>
            </div>
            <div className={styles.Column}>
            <div className={styles.Heading}>Entrar</div>
            <div className={styles.margin}  >
            <a className={styles.link} href="/entrar">faça login</a>
            </div>
            </div>

            <div className={styles.Column}>
            <div className={styles.Heading}>Cadastrar</div>
            <div className={styles.margin}>
            <a className={styles.link} href="/cadastro">se cadastre</a>
            </div>
            </div>
            </div>
            </div>

            
            
        </div>
    )
}

export default Footer