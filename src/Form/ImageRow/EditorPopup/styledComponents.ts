import { FaUndo, FaRedo } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from '../../Button';
import { FormRow as FR } from '../../FormRow';

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 15px;
`;
export const Row = styled(FR)`
  text-align: center;
`;
export const RotateButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RotateButton = styled(Button)`
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
`;
export const UndoRotationIcon = styled(FaUndo)`
  display: block;
`;
export const RedoRotationIcon = styled(FaRedo)`
  display: block;
`;
