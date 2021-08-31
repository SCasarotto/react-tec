import React from 'react';

import { StyledLabel } from './styledComponents';

// TODO: See if these can be merged and not separate ... seems weird
export interface LabelCustomProps {
  required?: boolean;
  disabled?: boolean;
}
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    LabelCustomProps {}
/**
 *
 * A simple styling of an html `<label>`.
 *
 * Besides the props mentioned below, all props are passed right through to the label. Reference the [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).
 *
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (props, ref) => {
    const { children, required, className = '', ...rest } = props;
    return (
      <StyledLabel className={`tec-label ${className}`} ref={ref} {...rest}>
        {children}
        {required ? ' *' : ''}
      </StyledLabel>
    );
  },
);
