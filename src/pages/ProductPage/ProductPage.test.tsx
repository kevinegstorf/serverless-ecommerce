import React from 'react';
import { render } from 'react-testing-library';
import ProductPage from './ProductPage';

test('snapshot test', () => {
    const container = render(<ProductPage/>)
    expect(container).toMatchSnapshot();
});