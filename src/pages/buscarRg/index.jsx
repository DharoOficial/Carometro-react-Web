import React, { useEffect, useState } from 'react';
import Rodape from '../../components/rodape';
import Menu from '../../components/menu';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { url } from '../../utils/constants';
import BuscarSevico from '../../servicos/buscarSevico'
import './index.css';

const BuscarRg = () => {

    const [alunos, setAlunos] = useState([]);
    const [alunoRg, setAlunoRg] = useState([]);
    const [achou, setAchou] = useState('');

    const listarAluno = () => {

        BuscarSevico
            .BuscaroRg()
            .then(resultado => {
                console.log('dwadw')
                console.log(`resultado ${JSON.stringify(resultado.data)}`);
                setAlunoRg(resultado.data.data);
            })
            .catch(erro => {
                console.error('erro na api :' + erro);
            })

    }

    const formik = useFormik({
        initialValues: {
            Rg: ''
        },
        onSubmit: Values => {

            if (Values.Rg != '') {


                let o
                let p = alunoRg.length;

                for (o = 0; o <= p; o++) {

                    if (Values.Rg === alunoRg.map(c => c.rg)[o]) {

                        alunos.push(alunoRg[o])
                        formik.resetForm();
                    } else {
                        setAchou('achou')
                    }
                }

                if (achou === 'achou') {
                    alert('nenhum usuario foi encotrado')
                }

            } else {
                setAlunos(alunoRg)
            }
        }
    });

    useEffect(() => {
        listarAluno()
    }, [])




    return (
        <div>
            <Menu />
            <div className="container123 ">
                <div className="buscaralorgshadow">
                    <Form  className="BuscarRgForm" onSubmit={formik.handleSubmit} >


                        <Form.Group  >
                            <Form.Label style={{ fontSize: '2em' }}>Digite o RG do aluno para buscar o Aluno</Form.Label>
                            <Form.Control
                                type="text"
                                name="Rg"
                                style={{ width: '1350px' }}
                                placeholder="Digite o RG aqui"
                                value={formik.values.Rg}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Button 
                        variant="primary" 
                        type="submit" 
                        style={{ width: '200px', margin: 'auto' }}  
                        
                        >
                            Buscar
                        </Button>

                        <a href="/buscarRg">
                            <Button variant="success" type="submit" className="BotaoCadastroAluno" >
                                limpar
                            </Button>
                        </a>

                    </Form>
                </div>
                <div >

                    {
                        alunos.map((item, index) => {
                            return (

                                <div key={index} className="alunoBuscado" >
                                    <p   ><img src={item.fotoAluno} alt="imagem usuario" className="imagemdeAlunoBuscado" /></p>
                                    <p className="alunobuscadodados" >Nome de usuario: <br />{item.nomeUsuario}</p>
                                    <p className="alunobuscadodados" >Rg:  <br />{item.rg}</p>
                                </div>
                            )
                        })
                    }
                    {/* </tbody> */}
                    {/* <div className="alunobuscadodados">
                        <img src="https://i.ytimg.com/vi/iKWBkWwUPU0/hqdefault.jpg" alt="imagem do usuario" className="imagemdeAlunoBuscado" />
                        <p>dados dos aluno como nome turma e rg para ser<br /> comparado ao onchange</p>
                    </div> */}
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export default BuscarRg