import React from 'react';

import { FileInput, FileInputProps } from '../FileInput';
import { FormRow, FormRowCustomProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';

export interface FileRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    FileInputProps {
  labelForKey: string;
}
/**
 *
 * A form row with title and `FileRow`. In additiona to the props below, reference all props for `FileRow`.
 *
 */
export const FileRow = React.forwardRef<HTMLInputElement, FileRowProps>(
  (props, ref) => {
    const {
      rowSize,
      last,
      className = '',
      title,
      labelForKey,
      ...rest
    } = props;

    return (
      <FormRow
        rowSize={rowSize}
        last={last}
        className={`tec-fileRow ${className}`}
      >
        {title && (
          <Label
            htmlFor={labelForKey}
            required={rest.required}
            disabled={rest.disabled}
            className='tec-fileRowTitle'
          >
            {title}
          </Label>
        )}
        <FileInput
          id={labelForKey}
          className='tec-fileRowInput'
          ref={ref}
          {...rest}
        />
      </FormRow>
    );
  },
);
