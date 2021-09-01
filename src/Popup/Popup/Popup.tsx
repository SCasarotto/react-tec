import React, { ReactNode } from 'react';

import { Background, Content } from './styledComponents';

export interface PopupProps {
  visible: boolean;
  className?: string;
  children?: ReactNode;
}
/**
 *
 * Popup simple popup component.
 *
 */
export const Popup: React.FC<PopupProps> = (props) => {
  const { visible, className = '', children } = props;

  return (
    <Background className={`tec-popup ${className}`} visible={visible}>
      <Content className='tec-popupContent'>{children}</Content>
    </Background>
  );
};

Popup.defaultProps = {
  visible: false,
};
