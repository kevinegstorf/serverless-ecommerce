import React from 'react';
import { withInfo } from "@storybook/addon-info";

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text } from '@storybook/addon-knobs/react';

(storiesOf('Button', module) as any)
  .addWithJSX(
    'Button Info', withInfo({ inline: true })(() => <Button onClick={() => {}}>{text('text', 'Click Me')}</Button>)
  )
  .addWithJSX('example default', () => (
    <Button onClick={() => {}}>{text('text', 'Click Me')}</Button>
  ));
