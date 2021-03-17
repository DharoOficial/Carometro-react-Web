import React, { useEffect, useState } from 'react'
import Rodape from '../../components/rodape';
import Menu from '../../components/menu';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import alunoServico from '../../servicos/alunoServico'
import { useFormik } from 'formik';

const CadastroAluno = () => {


    const alterar = (values) => {
        alunoServico
            .alterar(values)
            .then(resultado => {
                console.log(JSON.stringify(resultado))
            })
    }

    const Cadastrar = (values) => {
        alunoServico
            .cadastrar(values)
            .then(resultado => {
                console.log(JSON.stringify(resultado))
                if (resultado === true) {
                    alert('usuario cadastrado')
                } else {
                    alert('dados invalidos')
                }
            })
    }


    const formik = useFormik({
        initialValues: {
            nomeUsuario: '',
            email: '',
            senha: '',
            telefone: '',
            rg: '',
            cpf: '',
            fotoAluno: '',
            buscRg: '',
        },
        onSubmit: values => {
            console.log(values);
            if (values.buscRg === '') {
                Cadastrar(values)
            } else {
                alterar(values);
            }
        }
    })

    return (
        <div>
            <Menu />
            <div className="container ">
                <h1 style={{ marginTop: '2em' }}>Cadastro Aluno</h1>
                <Form onSubmit={formik.handleSubmit} className="formdecadastroaluno" >

                    <Form.Group>
                        <Form.Label>Buscar por Rg</Form.Label>
                        <p>IMPORTANT: caso você deseje atualizar algum Aluno, insira seu RG.<br /> Caso deseje cadastrar Algum aluno, nao insira nada neste campo</p>
                        <Form.Control
                            style={{ marginBottom: '4em' }}
                            type="text"
                            name="buscRg"
                            value={formik.values.buscRg}
                            onChange={formik.handleChange}
                            placeholder="Buscar Usuario" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Nome Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            name="nomeUsuario"
                            value={formik.values.nomeUsuario}
                            onChange={formik.handleChange}
                            placeholder="Nome Usuario" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="text"
                            name="senha"
                            value={formik.values.senha}
                            onChange={formik.handleChange}
                            placeholder="Senha" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            type="text"
                            name="telefone"
                            value={formik.values.telefone}
                            onChange={formik.handleChange}
                            placeholder="telefone" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>RG</Form.Label>
                        <Form.Control
                            type="text"
                            name="rg"
                            value={formik.values.rg}
                            onChange={formik.handleChange}
                            placeholder="RG" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="cpf"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            placeholder="CPF" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Foto Aluno</Form.Label>
                        <Form.Control
                            type="text"
                            name="fotoAluno"
                            value={formik.values.fotoAluno}
                            onChange={formik.handleChange}
                            placeholder="Foto Aluno" />
                    </Form.Group>

                    <Button variant="success" type="submit" className="botaodecadastroaluno" >
                        Cadastrar
                    </Button>

                </Form>
            </div>

            <Rodape />
        </div>
    )

}
export default CadastroAluno