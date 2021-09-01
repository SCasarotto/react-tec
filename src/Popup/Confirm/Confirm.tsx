import React from 'react';

import { PopupProps } from '../Popup';
import {
  Popup,
  Title,
  Message,
  ButtonContainer,
  LeftButton,
  RightButton,
} from './styledComponents';

export interface ConfirmProps extends PopupProps {
  title?: string;
  message?: string;
  leftOnClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  leftButtonTitle?: string;
  rightOnClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  rightButtonTitle?: string;
}
/**
 *
 * Confirm is a simple confirm popup typically used to have the user confirm their action.
 *
 */
export const Confirm: React.FC<ConfirmProps> = (props) => {
  const {
    title,
    message,
    leftOnClick,
    leftButtonTitle = 'Cancel',
    rightOnClick,
    rightButtonTitle = 'Confirm',
    children,
    visible,
    className = '',
  } = props;

  return (
    <Popup visible={visible} className={`tec-confirm ${className}`}>
      {title && <Title className='tec-confirmTitle'>{title}</Title>}
      {message && <Message className='tec-confirmMessage'>{message}</Message>}
      {children}
      <ButtonContainer className='tec-confirmButtonoContainer'>
        <LeftButton
          onClick={leftOnClick}
          className='tec-confirmButton tec-confirmLeftButton'
        >
          {leftButtonTitle}
        </LeftButton>
        <RightButton
          onClick={rightOnClick}
          className='tec-confirmButton tec-confirmRightButton'
        >
          {rightButtonTitle}
        </RightButton>
      </ButtonContainer>
    </Popup>
  );
};
