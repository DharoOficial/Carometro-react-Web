import React, { Component } from "react";
import {useHistory} from 'react-router-dom';
import {useFormik} from 'formik';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import "./style.css"; 
import contaServico from "../../../servicos/contaServico";
import { Form } from "react-bootstrap";

  const CreateAccount = () => {

    const history = useHistory();

    const formik = useFormik({

        initialValues :{

            nome : '',
            email : '',
            senha : '',
            telefone : '',
            tipoUsuario : 1

        },
        onSubmit : values => { 
            alert(JSON.stringify(values));
            contaServico
                .cadastrarAdmin(values)
                .then(resultado => resultado.json())
                .then(resultado =>{
                    if(resultado.sucesso){
                      // addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                      //apresenta a notificação
                        alert(resultado.mensagem)
                        //redireciona página admin
                        history.push('/login');
                    } else {

                        alert(resultado.mensagem)

                    }
                })
                .catch(erro => {
                    console.error('erro na API ' + erro);
                })
        }
    });



    return (
      <div className="wrapper">
        <div className="container">
          <div className="wrapper-img"></div>

          <div className="form-wrapper">
            <div className="logo-img"></div>

            <h2>Cadastro - Administrador</h2>

            <form onSubmit={formik.handleSubmit} >


            <div className="email">
                <label htmlFor="email"></label>
                <input
                  className="form-control"
                  name="nome"
                  type="nome"
                  placeholder="Informe seu Nome"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  required />
              </div>

              <div className="email">
                <label htmlFor="email"></label>
                <input
                  className="form-control"
                  name="telefone"
                  type="telefone"
                  placeholder="Informe o Seu Telefone"
                  value={formik.values.telefone}
                  onChange={formik.handleChange}
                  required />
              </div>

              <div className="email">
                <label htmlFor="email"></label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Informe o Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required />
              </div>

              <Form.Group controlId="formBasicEmail">
                <label htmlFor="password"></label>
                <Form.Control
                  className="form-control"
                  name="senha"
                  type="password"
                  placeholder="Informe a Senha"
                  value={formik.values.senha}
                  onChange={formik.handleChange}
                  required />
              </Form.Group>

              <div className="createAccount">
                <button className="buttonC" type="submit">
                  Acessar
                </button>
                <small className="link-acesso">
                  Já possui uma conta? <a href="/login">Login</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

  }


export default CreateAccount;