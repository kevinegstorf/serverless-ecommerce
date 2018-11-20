const config = {
    stripe: {
      apiKey: 'YOUR API KEY',
      checkoutUrl: 'INSERT AWS LAMBDA ENDPOINT FOR CHARGES',
      productsUrl: 'INSERT AWS LAMBDA ENDPOINT FOR PRODUCTS',
      currency: 'EUR',
    },
  };
  
  export default config;