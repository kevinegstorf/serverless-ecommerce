import * as React from 'react';
import { css } from 'emotion';
import {color, font} from '../../__styles__/index';

const navigation = css`
  background-color: ${color.pink};
  font-family: ${font.main};
  `
  
  const items =css`
  text-decoration: none;
  list-style-type: none;
  display: flex;
`

export interface NavigationProps {
}

export default class Navigation extends React.Component<NavigationProps, any> {
  public render() {
    return (
      <div className={navigation}>
        <ul className={items}>
          <li>Home</li>
          <li>Contact</li>
          <li>Delivery</li>
          <li>Terms</li>
          <li>
            <input/>
          </li>
          <li>Login</li>
        </ul>
      </div>
    );
  }
}

