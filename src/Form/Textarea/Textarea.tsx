import React from 'react';

import { StyledTextarea } from './styledComponents';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
/**
 *
 * Textarea is a simple styled `<textarea>`.
 *
 * All props are passed right through to the input. Reference the [HTML documentation for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
 *
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className = '', ...rest } = props;
    return (
      <StyledTextarea
        className={`tec-textarea ${className}`}
        ref={ref}
        {...rest}
      />
    );
  },
);
