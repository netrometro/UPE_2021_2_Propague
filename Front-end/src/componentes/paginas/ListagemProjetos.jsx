import style from './assets/ListagemProjeto.module.css';
import React, { useState, useEffect } from 'react';

export default function ListagemProjetos() {

    const [ listaProjetos, setListaProjetos ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/midias')
            .then(response => response.json())
            .then(data => setListaProjetos(data))
    }, []);
    
    return(
        <div className={style.listagem}>
            {listaProjetos.map(projeto => (
                <div className={style.projeto} key={projeto.id}>
                    <div className={style.imagem}>
                        <img src={projeto.imagem} alt=""/>
                    </div>
                    <div className={style.descricao}>
                        <h3>{projeto.nome}</h3>
                        <p>{projeto.descricao}</p>
                    </div>
                </div>
            ))}
            {/* <div className={style.projeto}>
                <div className={style.imagem}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>
                <div className={style.descricao}>
                    <h3>Projeto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
            </div> */}
            {/* <div className={style.projeto}>
                <div className={style.imagem}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>
                <div className={style.descricao}>
                    <h3>Projeto 1</h3>  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
            </div> */}
        </div>
    );
}

