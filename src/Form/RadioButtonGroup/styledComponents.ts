import styled from 'styled-components';

import { FormRow } from '../FormRow';
import { Label } from '../Label';
import { RadioButtonInput } from '../RadioButtonInput';

export const Container = styled(FormRow)`
  margin-bottom: 10px;
  display: inline-block;
  vertical-align: top;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RowWrapper = styled(FormRow)`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const RadioButton = styled(RadioButtonInput)`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;
export const RadioButtonLabel = styled(Label)`
  width: auto;
  display: inline-block;
  vertical-align: middle;
  padding-left: 10px;
  margin-bottom: 0px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 14px;

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
