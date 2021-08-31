import React from 'react';

import { manipulateRowData } from '../../helpers';
import { FormRowCustomProps } from '../FormRow';
import { LabelCustomProps } from '../Label';
import { RadioButtonInputProps } from '../RadioButtonInput';
import {
  Row,
  Label,
  SegmentedContainer,
  LabelWrapper,
  Input,
  InputLabel,
} from './styledComponents';

export interface SegmentedGroupButtonData {
  label: string;
  value?: string;
  key?: string;
}
export interface SegmentedGroupProps
  extends FormRowCustomProps,
    LabelCustomProps,
    RadioButtonInputProps {
  checkedValue: string;
  buttonArray: Array<string | SegmentedGroupButtonData>;
  inline?: boolean;
  labelForKey: string;
}
/**
 *
 * SegmentedGroup is a stylized `RadioButtonGroup`. This component mimics the style of iOS's Segmented Controls.
 *
 */
export const SegmentedGroup: React.FC<SegmentedGroupProps> = (props) => {
  const {
    title,
    onChange,
    checkedValue,
    buttonArray,
    labelForKey,
    required,
    inline,
    disabled,
    rowSize,
    last,
    className = '',
  } = props;

  return (
    <Row
      rowSize={rowSize}
      last={last}
      inline={inline}
      className={`tec-segmentedGroup ${className}`}
    >
      {title && (
        <Label
          inline={inline}
          required={required}
          disabled={disabled}
          className='tec-segmentedGroupTitle'
        >
          {title}
        </Label>
      )}
      <SegmentedContainer
        inline={inline}
        className='tec-segmentedGroupSegmentedContainer'
      >
        {buttonArray?.map((rowData, index) => {
          const { label, value, key } = manipulateRowData({
            rowData,
            labelForKey,
          });

          return (
            <LabelWrapper
              key={key}
              className='tec-segmentedGroupSegmentedLabelWrapper'
            >
              <Input
                value={value}
                onChange={onChange}
                id={key}
                checked={checkedValue === value}
                disabled={disabled}
                className='tec-segmentedGroupSegmentedInput'
              />
              <InputLabel
                htmlFor={key}
                key={key}
                first={index === 0}
                last={index + 1 === buttonArray.length}
                checked={checkedValue === value}
                disabled={disabled}
                className='tec-segmentedGroupSegmentedLabel'
              >
                {label}
              </InputLabel>
            </LabelWrapper>
          );
        })}
      </SegmentedContainer>
    </Row>
  );
};
