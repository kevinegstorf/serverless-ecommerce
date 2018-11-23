import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Hompage/Homepage';
import ProductsPage from './pages/ProductPage/ProductPage';
import FourOFour from './pages/FourOFour/FourOFour';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route component={FourOFour} />
        </Switch>
      </BrowserRouter>
    );
  }
}
