import React from "react";
import styles from "../rodape/Rodape.module.css"
const Footer = () => {
    return(
        <div className={styles.Box}>
            <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "60px" }}>Propague: Faça suas propagandas!</h1>
            <div className={styles.Container}>
            <div className={styles.Row}>
            <div className={styles.Column}>
            <div className={styles.Heading}>Teste</div>
                <div className={styles.FooterLink} href="#">Aim</div>
            </div>
            <div className={styles.Column}>
            <div className={styles.Heading}>Teste2</div>
                <div className={styles.FooterLink} href="#">Aim</div>
            </div>


            </div>
            </div>

            
            
        </div>
    )
}

export default Footer