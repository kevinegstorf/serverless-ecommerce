import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

import HomePage from './pages/Homepage/HomePage.tsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.tsx';

export default class  App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/products" component={ProductsPage}/>
        </Switch>
      </BrowserRouter>
      );
  }
}
