import React from 'react';

import PhoneInput from 'react-phone-number-input';

import { FormRow, FormRowCustomProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';
import { PhoneNumberInput, PhoneNumberInputProps } from '../PhoneNumberInput';

export interface PhoneNumberRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    PhoneNumberInputProps {
  labelForKey: string;
}
/**
 *
 * A component containing a `Row`, a `Label` and either a `PhoneNumberInput`.
 *
 * In addition to the props below, reference all props for `PhoneNumberInput`.
 *
 */
export const PhoneNumberRow = React.forwardRef<PhoneInput, PhoneNumberRowProps>(
  (props, ref) => {
    const {
      rowSize,
      last,
      className = '',
      title,
      type,
      disabled,
      required,
      labelForKey,
      ...rest
    } = props;

    return (
      <FormRow
        rowSize={rowSize}
        last={last}
        className={`tec-phoneNumberRow ${className}`}
      >
        {title && (
          <Label
            htmlFor={labelForKey}
            required={required}
            disabled={disabled}
            className='tec-phoneNumberRowTitle'
          >
            {title}
          </Label>
        )}
        <PhoneNumberInput
          type={type}
          id={labelForKey}
          disabled={disabled}
          className='tec-phoneNumberRowInput'
          ref={ref}
          {...rest}
        />
      </FormRow>
    );
  },
);
