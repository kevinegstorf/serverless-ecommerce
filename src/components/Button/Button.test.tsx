import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Button from './Button';

afterEach(cleanup)

test('button snapshot', () => {
    const container  = render(<Button onClick={() => {}}>Click me</Button>)

    expect(container).toMatchSnapshot();
});

test('button click', () => {
    const handleClick = jest.fn()
    const {getByText}  = render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
});