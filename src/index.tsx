import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { injectGlobal } from 'emotion'
import {color, font} from './__styles__/index';

injectGlobal`
  html,body{
    font-family: ${font.main};
    background-color: ${color.pink};
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
