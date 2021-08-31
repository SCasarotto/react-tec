import React from 'react';

import {
  PanelWrapper,
  Panel,
  Title,
  Message,
  Button,
} from './styledComponents';

export interface ErrorLoadingAlertProps {
  className?: string;
  title?: React.ReactNode;
  message?: React.ReactNode;
  buttonTitle?: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}
/**
 *
 * ErrorLoadingAlert in a simple component built inside of a `PanelWrapper` and `Panel` typically used when there is a loading error for a whole page.
 *
 */
export const ErrorLoadingAlert: React.FC<ErrorLoadingAlertProps> = (props) => {
  const {
    className = '',
    title,
    message,
    onClick,
    buttonTitle,
    children,
  } = props;
  return (
    <PanelWrapper className={`tec-errorLoadingAlert ${className}`}>
      <Panel>
        {title && <Title className='tec-errorLoadingAlertTitle'>{title}</Title>}
        {message && (
          <Message className='tec-errorLoadingAlertMessage'>{message}</Message>
        )}
        {buttonTitle && (
          <Button onClick={onClick} className='tec-errorLoadingAlertButton'>
            {buttonTitle}
          </Button>
        )}
        {children}
      </Panel>
    </PanelWrapper>
  );
};
