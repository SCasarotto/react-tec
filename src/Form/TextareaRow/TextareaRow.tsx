import React from 'react';

import { FormRow, FormRowCustomProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';
import { Textarea, TextareaProps } from '../Textarea';

export interface TextareaRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    TextareaProps {
  labelForKey: string;
}
/**
 *
 * A component containing a `Row`, a `Label` and either a `Textarea`. In addition to the props below, reference all props for `Textarea`.
 *
 */
export const TextareaRow = React.forwardRef<
  HTMLTextAreaElement,
  TextareaRowProps
>((props, ref) => {
  const {
    rowSize,
    last,
    className = '',
    title,
    onChange,
    disabled,
    value,
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
      <Textarea
        value={value}
        onChange={onChange}
        id={labelForKey}
        disabled={disabled}
        className='tec-inputRowInput'
        ref={ref}
        {...rest}
      />
    </FormRow>
  );
});
