import React from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

import {
  WithPortalButtonWrapper,
  WithPortalButton,
  WithPortalIcon,
} from './styledComponents';

export interface DatetimeInputProps
  // TODO: Improve Type
  extends Omit<ReactDatePickerProps<any>, 'value'> {
  //These are used to standardize to other input props
  placeholder?: string;
  // TODO: Improve Type
  value?: ReactDatePickerProps<any>['selected'];
  withPortalButton?: boolean;
}
/**
 *
 * A styled [React Datepicker](https://reactdatepicker.com/) Component. A few props have been adjusted or defaulted.
 *
 * Note: Styling for this component is not handled the same way as most React C components. In order to style everything the React DatePicker css has been internalized in the React C global styles. In the future this may be adjusted to make styling easier and more consistent with other components.
 *
 */
export const DatetimeInput = React.forwardRef<
  // TODO: Improve Type
  DatePicker<any>,
  DatetimeInputProps
>((props, ref) => {
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
});

DatetimeInput.defaultProps = {
  autoComplete: 'off',
  // dateFormat: 'MM/DD/YYYY',
};
