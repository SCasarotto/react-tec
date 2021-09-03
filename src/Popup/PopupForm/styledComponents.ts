import styled from 'styled-components';

import { Button } from '../../Form/Button';
import { Popup as P } from '../Popup';

export const Popup = styled(P)`
  .rec-popupContent {
    width: 90%;
    max-width: 650px;
    margin: 100px auto;
  }
`;
export const FormContent = styled.div`
  padding: 30px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftButton = styled(Button)`
  border-top: 1px solid ${(props) => props.theme.primary};
  border-right: 1px solid ${(props) => props.theme.primary};
  border-bottom: none;
  border-left: none;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 0px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;

  :active,
  :hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    border-top: 1px solid ${(props) => props.theme.primary};
    border-right: 1px solid ${(props) => props.theme.primary};
    border-bottom: none;
    border-left: none;
  }
`;
export const RightButton = styled(Button)`
  border-top: 1px solid ${(props) => props.theme.primary};
  border-right: none;
  border-bottom: none;
  border-left: 1px solid ${(props) => props.theme.primary};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;

  :active,
  :hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    border-top: 1px solid ${(props) => props.theme.primary};
    border-right: none;
    border-bottom: none;
    border-left: 1px solid ${(props) => props.theme.primary};
  }
`;
