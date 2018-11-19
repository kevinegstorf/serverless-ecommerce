import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch, Link} from "react-router-dom";
import HomePage from './pages/Homepage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

export default class  App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/products" component={ProductsPage}/>
      </Switch>
    );
  }
}
