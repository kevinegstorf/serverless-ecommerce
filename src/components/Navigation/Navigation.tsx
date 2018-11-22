import * as React from 'react';
import { css } from 'emotion';
import {color, font} from '../../__styles__/index';

const navigation = css`
  background-color: ${color.pink};
  font-family: ${font.main};
`

export interface NavigationProps {
}

export default class Navigation extends React.Component<NavigationProps, any> {
  public render() {
    return (
      <div className={navigation}>
        <ul>
          <li>Homepage</li>
          <li>Productpage</li>
          <li>
            <input/>
          </li>
          <li>Login</li>
        </ul>
      </div>
    );
  }
}

