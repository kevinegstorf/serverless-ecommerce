import { configure, setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

addDecorator(withKnobs);

const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
