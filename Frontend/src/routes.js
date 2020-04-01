import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login';
import Cadastro from './pages/cadastro';
import Profile from './pages/Profile';
import NovoIncidente from './pages/NovoIncidente';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidentes/novo" component={NovoIncidente}/>
            </Switch>
        </BrowserRouter>
    );
}