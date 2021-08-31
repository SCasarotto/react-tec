import React from 'react';

import { StyledRow } from './styledComponents';

export type FormRowSize =
  | 'full'
  | 'two-third'
  | 'half'
  | 'third'
  | 'forth'
  | 'condensed';
export interface FormRowCustomProps {
  rowSize?: FormRowSize;
  last?: boolean;
}
export interface FormRowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    FormRowCustomProps {}
/**
 *
 * Form row component. `Row` provides a simple way to layout form rows. Easily enabling multiple inputs or buttons on the same row.
 *
 */
export const FormRow = React.forwardRef<HTMLDivElement, FormRowProps>(
  (props, ref) => {
    const { rowSize = 'full', className = '', ...rest } = props;
    return (
      <StyledRow
        className={`tec-formRow ${className}`}
        rowSize={rowSize}
        ref={ref}
        {...rest}
      />
    );
  },
);
