import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import Product from './Product';

test('should render', () => {
    const container = render(<Product id='1' name='hello' caption='test' images={['hello']} description='test' skus='test'/>)
    expect(container).toMatchSnapshot();
});