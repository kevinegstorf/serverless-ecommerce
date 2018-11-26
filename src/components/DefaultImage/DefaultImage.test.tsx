import React from 'react';
import { render } from 'react-testing-library';
import DefaultImage from './DefaultImage';

test('snapshot test', () => {
    const container = render(<DefaultImage/>)
    expect(container).toMatchSnapshot();
});