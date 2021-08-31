import React, { ChangeEvent } from 'react';

import { manipulateRowData } from '../../helpers';
import { CheckboxInputProps } from '../CheckboxInput';
import { FormRowCustomProps, FormRowProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';
import {
  Container,
  InputWrapper,
  RowWrarpper,
  Checkbox,
  CheckboxLabel,
} from './styledComponents';

export interface CheckboxGroupButtonData {
  label: string;
  value?: string;
  key?: string;
}

export interface CheckboxGroupProps
  extends FormRowCustomProps,
    LabelCustomProps,
    Omit<CheckboxInputProps, 'onChange'> {
  labelForKey: string;
  onChange(values: Array<string>, event: ChangeEvent<HTMLInputElement>): void;
  inputRowSize?: FormRowProps['rowSize'];
  checkedValues: Array<string>;
  buttonArray: Array<string | CheckboxGroupButtonData>;
  scrolling?: boolean;
}
/**
 *
 * A form row with title and group of checkboxes and cooresponding labels.
 *
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checkedValues, onChange } = props;
    const { value } = event.target;

    let newValues = [...checkedValues];
    if (checkedValues) {
      if (checkedValues.includes(value)) {
        newValues = newValues.filter((e) => e !== value);
      } else {
        newValues.push(value);
      }
    }
    if (onChange) {
      onChange(newValues, event);
    }
  };

  const {
    rowSize,
    last,
    className = '',
    title,
    required,
    inputRowSize,
    disabled,
    checkedValues,
    buttonArray,
    labelForKey,
  } = props;

  return (
    <Container
      rowSize={rowSize}
      last={last}
      className={`tec-checkboxGroup ${className}`}
    >
      {title && (
        <Label
          disabled={disabled}
          required={required}
          className='tec-checkboxGroupTitle'
        >
          {title}
        </Label>
      )}
      <InputWrapper className='tec-checkboxGroupInputWrapper'>
        {buttonArray?.map((rowData) => {
          const { label, value, key } = manipulateRowData({
            rowData,
            labelForKey,
          });

          return (
            <RowWrarpper
              key={key}
              rowSize={inputRowSize}
              className='tec-checkboxGroupRowWrapper'
            >
              <Checkbox
                value={value}
                onChange={handleInputChange}
                id={key}
                checked={checkedValues?.includes(value)}
                disabled={disabled}
                className='tec-checkboxGroupCheckbox'
              />
              <CheckboxLabel
                htmlFor={key}
                disabled={disabled}
                className='tec-checkboxGroupLabel'
              >
                {label}
              </CheckboxLabel>
            </RowWrarpper>
          );
        })}
      </InputWrapper>
    </Container>
  );
};

CheckboxGroup.defaultProps = {
  scrolling: false,
};
