import React from 'react';

import { storiesOf } from '@storybook/react';
import DefaultImage from './DefaultImage';

(storiesOf('DefaultImage', module) as any)
  .addWithJSX('DefaultImage', () => (
    <DefaultImage/>
  ));