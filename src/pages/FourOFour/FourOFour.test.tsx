import React from 'react';
import { render } from 'react-testing-library';
import FourOFour from './FourOFour';

test('snapshot test', () => {
    const container = render(<FourOFour/>)
    expect(container).toMatchSnapshot();
});