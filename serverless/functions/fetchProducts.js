require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 
module.exports.handler = (event, context, callback) => {  
  return stripe.products.list({limit: 10})
    .then((products) => {    
      const response = {      
        statusCode: 200,      
        headers: {        
          'Access-Control-Allow-Origin': '*',      
        },      
        body: JSON.stringify({        
          data: products.data      
        }),    
      };    
      callback(null, response);  
  });
}