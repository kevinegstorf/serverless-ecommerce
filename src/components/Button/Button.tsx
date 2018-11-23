import * as React from 'react';
import { color, font } from '../../__styles__/index';
import { css } from 'emotion';

const button = css`
  background-color: ${color.pink};
  font-family: ${font.main};
`;

export interface Props {
  /** this dictates what the button will say  */
  children: React.ReactNode;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {};
export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  return (
    <button className={button} onClick={!disabled ? onClick : noop}>
      <span>{children}</span>
    </button>
  );
};
