import React from 'react';

import { PopupProps } from '../Popup';
import { Popup, Title, Message, Button } from './styledComponents';

export interface AlertProps extends PopupProps {
  title?: string;
  message?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  buttonTitle?: string;
}
/**
 *
 * Alert is a simple alert popup typically used to display error or success messages.
 *
 */
export const Alert: React.FC<AlertProps> = (props) => {
  const {
    title,
    message,
    onClick,
    buttonTitle = 'Okay',
    visible,
    className = '',
    children,
  } = props;

  return (
    <Popup visible={visible} className={`tec-alert ${className}`}>
      {title && <Title className='tec-alertTitle'>{title}</Title>}
      {message && <Message className='tec-alertMessage'>{message}</Message>}
      {children}
      <Button onClick={onClick} className='tec-alertButton'>
        {buttonTitle}
      </Button>
    </Popup>
  );
};
