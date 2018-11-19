import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from './Product';

storiesOf('Product', module)
  .add('with text', () => <Product id={'test'} name={'name'} images={["https://s3-eu-west-1.amazonaws.com/aws-nodejs-type…uck-94xqa2d8tkk1/images/white-t-shirt-500x500.jpg"]}/>);
