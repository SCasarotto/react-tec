import React from 'react';

import { StyledForm } from './styledComponents';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}
/**
 *
 * A simple form component. `Form` is simply a styled HTML `<form>`.
 *
 * All props are passed right through to the form. Reference [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form).
 *
 */
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => {
    const { className = '', ...rest } = props;
    return (
      <StyledForm className={`tec-form ${className}`} ref={ref} {...rest} />
    );
  },
);
