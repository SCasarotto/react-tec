import React from 'react';

import { FormRow, FormRowCustomProps } from '../FormRow';
import { Input, InputProps } from '../Input';
import { Label, LabelCustomProps } from '../Label';

export interface InputRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    InputProps {
  labelForKey: string;
}
/**
 *
 * A component containing a `Row`, a `Label` and either a `Input`. In addition to the props below, reference all props for `Input`.
 *
 */
export const InputRow = React.forwardRef<HTMLInputElement, InputRowProps>(
  (props, ref) => {
    const {
      rowSize,
      last,
      className = '',
      title,
      disabled,
      required,
      labelForKey,
      ...rest
    } = props;

    return (
      <FormRow
        rowSize={rowSize}
        last={last}
        className={`tec-inputRow ${className}`}
      >
        {title && (
          <Label
            htmlFor={labelForKey}
            required={required}
            disabled={disabled}
            className='tec-inputRowTitle'
          >
            {title}
          </Label>
        )}
        <Input
          id={labelForKey}
          disabled={disabled}
          className='tec-inputRowInput'
          ref={ref}
          {...rest}
        />
      </FormRow>
    );
  },
);
