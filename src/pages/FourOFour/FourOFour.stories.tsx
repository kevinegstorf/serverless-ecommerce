import React from 'react';
import { storiesOf } from '@storybook/react';

import FourOFour from './FourOFour';

(storiesOf('FourOFour', module) as any)
  .addWithJSX('default', () => <FourOFour/>);