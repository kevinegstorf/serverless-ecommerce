import React from 'react';
import { wInfo } from '../../utils';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, boolean } from '@storybook/addon-knobs/react';

(storiesOf('Button', module)as any)
  .addWithJSX(
    'with background',
    wInfo(`
      description
      
      ~~~js
      <Button>Click Me</Button>
      ~~~
      `)(() => <Button onClick={() => {}}>{text('text', 'Hello world')}</Button>),
  )
  .addWithJSX('with background 2', () => (
    <Button onClick={() => {}}>disabled={boolean('disabled', false)}>
      {text('text', 'Hello world')}
    </Button>
  ));
