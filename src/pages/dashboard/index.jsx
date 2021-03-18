import React from 'react';
import Rodape from '../../components/rodape';
import Menu from '../../components/menu';
import { Carousel } from 'react-bootstrap';
import './index.css';

const Dashboard = () => {

    return (
        <div>
            <Menu />
            <Carousel fade className="carrossel" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.escolakids.uol.com.br/2020/08/licoes-importantes-escola.jpg"
                        alt="Escola"
                    />
                    <Carousel.Caption>
                        <h3 className="texto-carrosel">A Educação a distancia</h3>
                        <p className="texto-carrosel">Com a chegada do COVID-19, as escolas fecharam as portas, porem a educação não pode parar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://super.abril.com.br/wp-content/uploads/2005/11/escola-2.png"
                        alt="Livro"
                    />

                    <Carousel.Caption>
                        <h3 className="texto-carrosel">O estudo não pode parar</h3>
                        <p className="texto-carrosel">O estudo é fundamelta, pois é ele quem da uma base, para a sociedade, ele quem </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cpdec.com.br/wp-content/uploads/2015/11/sucesso_profissional-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="texto-carrosel">Determinação</h3>
                        <p className="texto-carrosel">Precisamos de determinação em épocas dificeis</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="navegacao">

                <div className="card">
                    <a href="/cadastroAluno" className="likcard" >Aluno</a>
                    <img src="https://img.freepik.com/vetores-gratis/professora-e-alunos-com-mascaras-protetoras-em-seus-rostos-meninos-e-meninas
                    -vestidos-de-uniforme-escolar-e-professora-apontando-para-personagens-de-desenhos-animados-do-quadro-negro_71593-507.jpg?size
                    =626&ext=jpg" alt="Alunos" className="imgCard" />
                </div>

                <div className="card">
                    <a href="" className="likcard" >Professor</a>
                    <img src="https://i.pinimg.com/736x/3a/12/a1/3a12a15609960a80212c9272e6137524.jpg" alt="Professor" className="imgCard" />
                </div>

                <div className="card"> 
                    <a href="" className="likcard" >Turma</a>
                    
                    <img src="https://www.santanafm.com.br/wp-content/uploads/2020/01/material-escolar-1.jpg" alt="Turma" className="imgCard" />
                </div>

            </section>

            <Rodape />
        </div>

    )
}
export default Dashboard