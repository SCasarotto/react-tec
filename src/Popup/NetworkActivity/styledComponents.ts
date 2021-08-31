import styled from 'styled-components';

import { Spinner as S } from '../../Layout/Spinner';
import { Popup as P } from '../Popup';

export const Popup = styled(P)`
  display: flex;
  justify-content: center;
  align-items: center;

  .PopupContent {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 60px;
    text-align: center;
  }
`;
export const Spinner = styled(S)`
  margin-bottom: 30px;
`;
export const Message = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin: 0px;
  color: ${(props) => props.theme.white};
`;
