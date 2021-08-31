import React, { ReactElement } from 'react';

import RSelect, {
  Props as SelectProps,
  OptionTypeBase,
  GroupTypeBase,
} from 'react-select';

import { FormRow, FormRowCustomProps } from '../FormRow';
import { Select } from '../Select';
import { Label, LabelCustomProps } from './../Label';

// export interface SelectRowProps<T>
// 	extends RowCustomProps,
// 		LabelCustomProps,
// 		SelectProps<T> {
// 	labelForKey: string
// 	title?: string
// }

export interface SelectRowProps<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends FormRowCustomProps,
    LabelCustomProps,
    SelectProps<OptionType, IsMulti, GroupType> {}

const UnwarppedSearchSelectRow = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: SelectRowProps<OptionType, IsMulti, GroupType>,
  ref: React.Ref<RSelect<OptionType, IsMulti, GroupType>>,
) => {
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
      <Select<OptionType, IsMulti, GroupType>
        disabled={disabled}
        ref={ref}
        {...rest}
      />
    </FormRow>
  );
};

// This is here because of the need to useForward Ref with a generic prop type
// See: https://stackoverflow.com/a/58473012
/**
 *
 * A form row with title and `Select`. In additiona to the props below, reference all props for `Select`.
 *
 */
export const SelectRow = React.forwardRef(UnwarppedSearchSelectRow) as <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: SelectRowProps<OptionType, IsMulti, GroupType> & {
    ref?: React.Ref<RSelect<OptionType, IsMulti, GroupType>>;
  },
) => ReactElement;
