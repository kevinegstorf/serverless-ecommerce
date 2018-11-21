import React from 'react';

import { storiesOf } from '@storybook/react';
import Product from './Product';

storiesOf('Product', module)
.add('default', () => {
    return <Product id='1' name='hello' caption='test' images={['hello']} description='test' skus='test'/>
})