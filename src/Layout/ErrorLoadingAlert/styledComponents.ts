import styled from 'styled-components';

import { Button as B } from '../../Form/Button';
import { Panel as P } from '../Panel';
import { PanelWrapper as PW } from '../PanelWrapper';

export const PanelWrapper = styled(PW)`
  justify-content: center;
`;
export const Panel = styled(P)`
  max-width: 600px;
  margin: 30px auto;
`;
export const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 26px;
`;
export const Message = styled.p`
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
`;
export const Button = styled(B)`
  margin: 10px auto;
  width: auto;
`;
