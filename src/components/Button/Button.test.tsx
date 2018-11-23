import React from 'react';
import { render } from 'react-testing-library';
import Button from './Button';

test('should render', () => {
    const container = render(<Button onClick={() => {}}>Click me</Button>)
    expect(container).toMatchSnapshot();
});