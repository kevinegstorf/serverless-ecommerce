import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from './storyUtils';

storiesOf('Welcome', module).addWithJSX(
  'to your new Storybook🎊',
  wInfo(`


    ### Notes

    Hello world!:

    ### Usage
    ~~~js
    <div>This is an example component</div>
    ~~~

    ### To use this Storybook

    Explore the panels on the left.
  `)(() => <div style={{fontFamily: 'lato'}}>This is an example component</div>)
);