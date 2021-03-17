import React from 'react';
import './index.css';

const Rodape = () => {
    return (
        <footer>
            <div className="containerrodape">
                <div className="info" >
                    <nav className="links" >
                        <a href="" className="linkrodape" >sobre nós</a>
                        <a href="" className="linkrodape" >ajuda</a>
                        <a href="" className="linkrodape" >link</a>
                    </nav>
                    <img src="https://trello-attachments.s3.amazonaws.com/6046483ef081df6c535cae34/500x500/1e68a65a940ada6380e435f290603e1d/logo-carometro.jpeg.jpg" alt="logo" className="logorodape" />
                    <nav className="links" >
                        <a href="" className="linkrodape" >Instagram</a>
                        <a href="" className="linkrodape" >Twitter</a>
                        <a href="" className="linkrodape" >Youtube</a>
                    </nav>
                </div>
                <p className="direitosautorais">direitos Autorais reservados pela equipe "Sem Nome Fazer oque?" 2021</p>
            </div>
        </footer>
    )
}
export default Rodape;