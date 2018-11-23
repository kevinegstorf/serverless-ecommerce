import * as React from 'react';
import { color, font } from '../../__styles__/index';
import { css } from 'emotion';

const button = css`
  background-color: ${color.pink};
  font-family: ${font.button};
  min-width: 150px;
  min-height: 40px;
  padding: 0;
  border: none;
  border-radius: 5px;
  transition-duration: 0.2s;
  box-shadow: 0 5px 11px rgba(33,33,33,.2); 
  
  &:hover {
    transition-duration: 0.3s;
    box-shadow: 0 19px 36px rgba(33,33,33,.2);
    background-color: deeppink; 
    cursor: pointer;
  }

  &:focus {
    outline:none
  }

  &:active {
    transition-duration: 0.1s;
    box-shadow: 0 5px 11px rgba(33,33,33,.2);
  }
`;

const buttonSpan= css`
  font-size: 20px;
  color: white;
`;

export interface Props {
  /** this dictates what the button will say  */
  children: React.ReactNode;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default no
   **/
  disabled?: boolean;
}
const noop = () => {};
const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  return (
    <button className={button} onClick={!disabled ? onClick : noop}>
      <span className={buttonSpan}>{children}</span>
    </button>
  );
};

export default Button;
