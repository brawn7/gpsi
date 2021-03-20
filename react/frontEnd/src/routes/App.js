import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Table from '../containers/Tables';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/table' component={Table} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
