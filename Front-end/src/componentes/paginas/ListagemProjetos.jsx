import style from './assets/ListagemProjeto.module.css';

export default function ListagemProjetos() {
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

