import React from 'react';

import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';

storiesOf('Navigation', module)
  .addWithJSX('navigation', () => (
    <Navigation>Hello</Navigation>
  ));