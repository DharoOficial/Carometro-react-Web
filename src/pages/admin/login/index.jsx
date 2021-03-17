import React, { Component } from "react";
import {useHistory} from 'react-router-dom';
import {useFormik} from 'formik';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import "./style.css"; 
import loginUsuario from "../../../servicos/loginUsuario";
import { Form } from "react-bootstrap";

  const Login = () => {

    const history = useHistory();

    const formik = useFormik({

        initialValues :{
            email : '',
            senha : ''

        },
        onSubmit : values => { 
            alert(JSON.stringify(values));
            loginUsuario
                .logar(values)
                .then(resultado => resultado.json())
                .then(resultado =>{
                    if(resultado.sucesso){
                      // addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                      //apresenta a notificação
                        alert(resultado.mensagem)
                        //salva token no localstorage
                        localStorage.setItem('token-carometro', resultado.data.token);
                        //redireciona página admin
                        history.push('/');
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

            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit} >
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
                  Ainda não é cadastrado? <a href="/cadastroAdmin">Cadastre-se</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );

  }


export default Login;