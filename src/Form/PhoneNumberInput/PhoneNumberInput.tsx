import React from 'react';

import PhoneInput, { PhoneInputProps } from 'react-phone-number-input';

import { StyledPhoneNumberInput } from './styledComponents';

export interface PhoneNumberInputProps extends PhoneInputProps {}
/**
 *
 * PhoneNumberInput is a simple styled [React Phone Number Input](https://gitlab.com/catamphetamine/react-phone-number-input) Component.
 *
 */
export const PhoneNumberInput = React.forwardRef<
  PhoneInput,
  PhoneNumberInputProps
>((props, ref) => {
  const { className = '', ...rest } = props;
  return (
    <StyledPhoneNumberInput
      className={`tec-phoneNumberInput ${className}`}
      ref={ref}
      {...rest}
    />
  );
});
