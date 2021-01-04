import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Header */
import Header from './components/Header';

/** Páginas */
import Main from './pages/Main';
import QuemSomos from './pages/QuemSomos';
import Empreendimentos from './pages/Empreendimentos';
import DetalhesEmpreendimento from './pages/DetalhesEmpreendimento';
import Painel from './pages/Painel';
import Forgot from './pages/Forgot';
import Contato from './components/Contato';
// import Register from './pages/Register';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/quem-somos" exact component={QuemSomos} />
        <Route path="/empreendimentos" exact component={Empreendimentos} />
        <Route
          path="/empreendimentos/detalhes/:id"
          component={DetalhesEmpreendimento}
        />
        <Route path="/painel" component={Painel} />
        <Route path="/forgot-password" component={Forgot} />
        {/* <Route path="/create-account" component={Register} /> */}
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
