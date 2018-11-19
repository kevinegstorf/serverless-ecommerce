import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from './Product';

storiesOf('Product', module)
  .add('with text', () => <Product/>);
