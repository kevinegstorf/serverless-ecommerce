import React from 'react';
import { render } from 'react-testing-library';
import Product from './Product';

test('snapshopt test', () => {
    const container = render(<Product id='1' name='hello' caption='test' images={['hello']} description='test' skus='test'/>)
    expect(container).toMatchSnapshot();
});