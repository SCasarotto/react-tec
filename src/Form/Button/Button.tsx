import React from 'react';

import { StyledButton } from './styledComponents';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 *
 * A styled HTML `<button>`.
 *
 * All props are passed right through to the button. Reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
 *
 * Note: The button's `type` is defaulted to `'button'` instead of normal HTML where it is defaulted to `'submit'`.
 *
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className = '', type = 'button', ...rest } = props;
    return (
      <StyledButton
        className={`tec-button ${className}`}
        type={type}
        ref={ref}
        {...rest}
      />
    );
  },
);
