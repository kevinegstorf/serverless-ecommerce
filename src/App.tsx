import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage from './pages/Hompage/Homepage';
import ProductsPage from './pages/ProductPage/ProductPage';

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