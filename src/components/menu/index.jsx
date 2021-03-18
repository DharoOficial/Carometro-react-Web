import React from 'react';
import './index.css';

const Menu = () => {

    let title = "Dhasboard";

    return (
        <header >
            <div className="containercabecalho">
                <div className="cabecalho">
                    <a href='/dashboard' className="tituloMenu">{title}</a>
                    <nav className="linkscabecalho">
                        <a href="" className="linkcabecalho">Instituição</a>
                        <div className='buscarRG'>
                            <a href="/buscarRg" >Buscar Aluno<br/> por RG</a>
                        </div>
                        <a href="/cadastroAluno" className="linkcabecalho">Aluno</a>
                        <a href="" className="linkcabecalho">Professor</a>
                        <a href="" className="linkcabecalho">Turma</a>
                        <a href="" className="linkcabecalho">Sair</a>
                        <img src="https://image.flaticon.com/icons/png/512/16/16480.png" alt="imagem de usuario" className="imagemusuario" />
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Menu