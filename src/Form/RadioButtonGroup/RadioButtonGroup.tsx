import React from 'react';

import { manipulateRowData } from '../../helpers';
import { FormRowCustomProps, FormRowProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';
import { RadioButtonInputProps } from '../RadioButtonInput';
import {
  Container,
  InputWrapper,
  RowWrapper,
  RadioButton,
  RadioButtonLabel,
} from './styledComponents';

export interface RadioButtonData {
  label: string;
  value?: string;
  key?: string;
}
export interface RadioButtonGroupProps
  extends FormRowCustomProps,
    LabelCustomProps,
    RadioButtonInputProps {
  labelForKey: string;
  inputRowSize?: FormRowProps['rowSize'];
  checkedValue: string;
  buttonArray: Array<string | RadioButtonData>;
  scrolling?: boolean;
}
/**
 *
 * A component containing a `Row`, a `Label`, and a group of `RadioInput` cooresponding `Label`.
 *
 */
export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = (props) => {
  const {
    rowSize,
    last,
    title,
    onChange,
    checkedValue,
    buttonArray,
    labelForKey,
    disabled,
    required,
    inputRowSize,
    className = '',
  } = props;

  return (
    <Container
      rowSize={rowSize}
      last={last}
      className={`tec-radioButtonGroup ${className}`}
    >
      {title && (
        <Label
          disabled={disabled}
          required={required}
          className='tec-radioButtonGroupTitle'
        >
          {title}
        </Label>
      )}
      <InputWrapper className='tec-radioButtonGroupInputWrapper'>
        {buttonArray?.map((rowData) => {
          const { label, value, key } = manipulateRowData({
            rowData,
            labelForKey,
          });

          return (
            <RowWrapper
              key={key}
              rowSize={inputRowSize}
              className='tec-radioButtonGroupRowWrapper'
            >
              <RadioButton
                value={value}
                onChange={onChange}
                id={key}
                checked={checkedValue === value}
                disabled={disabled}
                className='tec-radioButtonGroupRadioButton'
              />
              <RadioButtonLabel
                htmlFor={key}
                disabled={disabled}
                className='tec-radioButtonGroupLabel'
              >
                {label}
              </RadioButtonLabel>
            </RowWrapper>
          );
        })}
      </InputWrapper>
    </Container>
  );
};
