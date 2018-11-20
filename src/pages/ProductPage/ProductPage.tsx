import React, { Component } from 'react';
import Product from '../../components/Product/Product';

import config from "../../config";

export default class ProductsPage extends Component {
    state = {
        products: []
      }
      
      componentDidMount() {
        this.fetchProducts();
      }

    
      async fetchProducts(): Promise<void> { // Token returned from Stripe
        try {
            const res = await fetch(config.stripe.productsUrl, { // Backend API url
              method: 'GET'
            });
            const response = await res.json();
            const products = response.data;
        
            this.setState({
              products
            });
        } catch (error){
            console.log(error)
        }
      }
    
    
      render() {
        const {products} = this.state;
    
        const productList = products.map((product: any, index) => {
          return (
              <Product  
                id={product.id}
                key ={product.name}
                name={product.name}
                caption={product.caption}
                description={product.description}
                skus=''
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