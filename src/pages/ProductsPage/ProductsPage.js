import React, { Component } from 'react';
import Product from '../../components/Product/Product';
import './ProductsPage.css';

import config from "../../config";

export default class ProductsPage extends Component {
    state = {
        products: []
      }
      
      componentDidMount() {
        this.fetchProducts();
      }
    
      async fetchProducts() { // Token returned from Stripe
        const res = await fetch(config.stripe.productsUrl, { // Backend API url
          method: 'GET'
        });
        const response = await res.json();
        const products = response.data;
    
        this.setState({
          products
        });
      }
    
    
      render() {
        const {products} = this.state;
    
        const productList = products.map((product, index) => {
          console.log(product);
          return (
              <Product  
                id={product.id}
                key ={product.name}
                name={product.name}
                caption={product.caption}
                description={product.description}
                //  skus={product.skus.data}
                images={product.images} />
          );
        });
    
        return (
            <div id="products">
            <h1 className='testing'>Test</h1>
              {productList}
            </div>
        );
      }
    }