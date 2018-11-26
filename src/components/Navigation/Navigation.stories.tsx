import React from 'react';
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';

(storiesOf('Navigation', module) as any)
  .addWithJSX('navigation', withInfo({ inline: true })(() => (
    <Navigation/>
  )));