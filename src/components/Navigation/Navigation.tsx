import * as React from 'react';
import { css } from 'emotion';
// import {font} from '../../__styles__/index';

const navigation = css`
  background-color: deeppink;
  font-family: karla;
  color: white;
  min-height: 60px;
  box-shadow: 0 8px 6px -6px grey;
  `
  
  const items =css`
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-self: center;
  padding-top: 20px;
`

export interface NavigationProps {
}

export default class Navigation extends React.Component<NavigationProps, any> {
  public render() {
    return (
      <div className={navigation}>
        <ul className={items}>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>DELIVERY</li>
          <li>TERMS</li>
          <li>
            <input/>
          </li>
          <li>LOGIN</li>
        </ul>
      </div>
    );
  }
}

