import React from 'react';

import ReactDatePicker from 'react-datepicker';

import { DatetimeInput, DatetimeInputProps } from '../DatetimeInput';
import { FormRow, FormRowCustomProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';

export interface DatetimeRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    DatetimeInputProps {
  labelForKey: string;
}
/**
 *
 * A `Row`, `Label` and `DatetimeInput`. In addition to the props below, reference all props for `DatetimeInput`.
 *
 */
export const DatetimeRow = React.forwardRef<
  // TODO: Improve generic type and entend with generic like Select
  ReactDatePicker<any>,
  DatetimeRowProps
>((props, ref) => {
  const { rowSize, last, className = '', title, labelForKey, ...rest } = props;

  return (
    <FormRow
      rowSize={rowSize}
      last={last}
      className={`tec-datetimeRow ${className}`}
    >
      {title && (
        <Label
          htmlFor={labelForKey}
          required={rest.required}
          disabled={rest.disabled}
          className='tec-datetimeRowTitle'
        >
          {title}
        </Label>
      )}
      <DatetimeInput
        id={labelForKey}
        {...rest}
        className='tec-datetimeRowDateInput'
        ref={ref}
      />
    </FormRow>
  );
});
