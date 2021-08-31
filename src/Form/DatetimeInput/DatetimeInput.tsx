import React from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import {
  WithPortalButtonWrapper,
  WithPortalButton,
  WithPortalIcon,
} from './styledComponents';

export interface DatetimeInputProps
  extends Omit<ReactDatePickerProps, 'value'> {
  //These are used to standardize to other input props
  placeholder?: string;
  value?: ReactDatePickerProps['selected'];
  withPortalButton?: boolean;
}
/**
 *
 * A styled [React Datepicker](https://reactdatepicker.com/) Component. A few props have been adjusted or defaulted.
 *
 * Note: Styling for this component is not handled the same way as most React C components. In order to style everything the React DatePicker css has been internalized in the React C global styles. In the future this may be adjusted to make styling easier and more consistent with other components.
 *
 */
export const DatetimeInput = React.forwardRef<DatePicker, DatetimeInputProps>(
  (props, ref) => {
    const {
      selected,
      value,
      placeholderText,
      placeholder,
      className = '',
      withPortalButton,
      ...rest
    } = props;

    if (withPortalButton) {
      return (
        <WithPortalButtonWrapper>
          <DatePicker
            selected={selected || value}
            placeholderText={placeholderText || placeholder}
            className={`tec-datetimeInput ${className}`}
            ref={ref}
            {...rest}
          />
          <DatePicker
            selected={selected || value}
            withPortal
            customInput={
              <WithPortalButton className='tec-datetimeInputWithPortalButton'>
                <WithPortalIcon className='tec-datetimeInputWithPortalButtonIcon' />
              </WithPortalButton>
            }
            {...rest}
            id={rest.id ? rest.id + 'withPortalButton' : rest.id}
          />
        </WithPortalButtonWrapper>
      );
    }

    return (
      <DatePicker
        selected={selected || value}
        placeholderText={placeholderText || placeholder}
        className={`tec-datetimeInput ${className}`}
        ref={ref}
        {...rest}
      />
    );
  },
);

DatetimeInput.defaultProps = {
  autoComplete: 'off',
  // dateFormat: 'MM/DD/YYYY',
};
