import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

import FourOFour from './FourOFour';

(storiesOf('FourOFour', module) as any)
  .addWithJSX('default', withInfo({ inline: true })(() => <FourOFour/>));