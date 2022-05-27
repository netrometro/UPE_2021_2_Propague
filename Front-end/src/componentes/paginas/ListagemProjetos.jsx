import style from './assets/ListagemProjeto.module.css';
import React, { useState, useEffect } from 'react';

export default function ListagemProjetos() {

    const [ projetos, setProjetos ] = useState({
        nome: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        status: "",
        id: ""
    });

    const [ listaProjetos, setListaProjetos ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/projetos')
        .then(response => response.json())
        .then(data => {
            setListaProjetos(data);
        });
    }, []);
    
    return(
        <div className={style.container}>
            <div className={style.projeto}>
                <div className={style.imagem}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>
                <div className={style.descricao}>
                    <h3>Projeto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
            </div>
            <div className={style.projeto}>
                <div className={style.imagem}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </div>
                <div className={style.descricao}>
                    <h3>Projeto 1</h3>  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
            </div>
        </div>
    );
}

