import * as React from 'react';
import { css } from 'emotion';

const navigation = css`
  background-color: hotpink;
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

