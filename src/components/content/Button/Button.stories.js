// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { Button } from './Button.tsx';
// import {wInfo} from '../../../../.storybook/storyUtils';
// import { color, boolean, text  } from '@storybook/addon-knobs/react';

// storiesOf('Button', module)
//   .addWithJSX(
//     'with background',
//     wInfo(`
//       description
      
//       ~~~js
//       <Button>Click</Button>
//       ~~~
//       `)(() => <Button bg="palegoldenrod">Hello world</Button>),
//   )
//   .addWithJSX('with background 2', () => (
//     <Button  bg={color('bg', 'green')} disabled={boolean('disabled', false)}>
//       {text('text', 'Hello world')}
//     </Button>
//   ));