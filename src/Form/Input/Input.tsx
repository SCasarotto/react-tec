import React from 'react';

import { StyledInput } from './styledComponents';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
/**
 *
 * Input is a simple styled `<input>`.
 *
 * All props are passed right through to the input. Reference the [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
 *
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { className = '', ...rest } = props;
    return (
      <StyledInput className={`tec-input ${className}`} ref={ref} {...rest} />
    );
  },
);
