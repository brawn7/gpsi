import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Vendors from '../containers/Vendors';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/vendors" component={Vendors} />
  </BrowserRouter>
);

export default App;