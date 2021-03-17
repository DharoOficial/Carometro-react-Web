import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//paginas
import Dashboard from './pages/dashboard';
import BuscarRg from './pages/buscarRg'
import cadastroAluno from './pages/cadastroAluno'
import CreateAccount from './pages/admin/cadastrarAdmin';
import Login from './pages/admin/login';

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render((
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/buscarRg" component={BuscarRg} />
            <Route path="/cadastroAluno" component={cadastroAluno} />
            <Route path="/cadastroAdmin" component={CreateAccount} />
            <Route path="/login" component={Login} />
        </Switch>
    </ BrowserRouter>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
