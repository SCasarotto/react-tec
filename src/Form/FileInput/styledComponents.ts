import { FaFileUpload, FaRegWindowClose } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from '../Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputWrapper = styled.div<{
  disabled?: boolean;
  active?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  padding-right: 5px;

  border: 1px solid
    ${(props) => {
      const { theme, disabled, active } = props;
      if (active) {
        return theme.primary;
      } else if (disabled) {
        return theme.lighterGray;
      }
      return theme.lightGray;
    }};
  box-shadow: ${(props) =>
    props.active ? `0 0 0 1px ${props.theme.primary} inset` : 'none'};
  transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
  :hover,
  :active {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
  }
`;
export const Label = styled.label<{
  disabled?: boolean;
  active?: boolean;
}>`
  display: block;
  width: 100%;
  font-size: 14px;
  color: ${(props) =>
    props.disabled ? props.theme.gray : props.theme.darkGray};
  padding: 10px;
  cursor: ${(props) => {
    const { disabled, active } = props;
    if (disabled) {
      return 'not-allowed';
    } else if (active) {
      return 'copy';
    }
    return 'pointer';
  }};
`;

export const LabelCopy = styled.span``;

export const LabelIcon = styled(FaFileUpload)`
  margin-right: 10px;
  vertical-align: middle;
  font-size: 18px;
`;

export const Input = styled.input`
  display: none;
`;

export const ClearButton = styled(Button)`
  width: auto;
  padding: 5px 10px;
  text-align: center;
`;

export const ButtonIcon = styled(FaRegWindowClose)`
  color: inherit;
  display: block;
`;

export const ErrorMessage = styled.span`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.errorRed};
`;
