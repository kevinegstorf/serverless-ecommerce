import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import placeholder from '../DefaultImage/images/default-image.svg';


import Product from './Product';

(storiesOf('Product', module) as any)
  .addWithJSX('product', withState({ defaultImage: placeholder })(({ store }) => (
    <Product {...store.state} id='1' name='hello' caption='hello' description='test' images={[]} skus='test'/>
  )));
