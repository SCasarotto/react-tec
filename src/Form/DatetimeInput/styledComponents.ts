import { FaRegCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from '../Button';

export const WithPortalButtonWrapper = styled.div`
  display: flex;

  .react-datepicker__input-container input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
export const WithPortalButton = styled(Button)`
  position: relative;
  display: block;
  width: auto;
  font-size: 17px;
  padding: 10px 12px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.darkerGray};
  text-align: left;

  border: 1px solid ${(props) => props.theme.lightGray};
  transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;

  :hover,
  :active {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
  }
  :disabled {
    color: ${(props) => props.theme.gray};
    border: 1px solid ${(props) => props.theme.lighterGray};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
export const WithPortalIcon = styled(FaRegCalendarAlt)`
  color: inherit;
  display: block;
`;
