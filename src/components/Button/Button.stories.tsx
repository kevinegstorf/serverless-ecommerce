import React from 'react';
import { withInfo } from "@storybook/addon-info";

import { storiesOf } from '@storybook/react';
import Button from './Button';
import { text } from '@storybook/addon-knobs/react';
import withTests from '../../withTests';

(storiesOf('Button', module) as any)
.addDecorator(withTests('Button'))
.addDecorator( withInfo({ inline: true }))
  .addWithJSX(
    'Button Default', () => <Button onClick={() => {}}>{text('text', 'Click Me')}</Button>);
