import React from 'react';

import { PopupProps } from '../Popup';
import { Popup, Spinner, Message } from './styledComponents';

export interface NetworkActivityProps extends PopupProps {
  message?: string;
}
/**
 *
 * NetworkActivity is an overlay to indicate some network request or long running process is taking place.
 *
 */
export const NetworkActivity: React.FC<NetworkActivityProps> = (props) => {
  const { visible, className = '', message } = props;

  return (
    <Popup visible={visible} className={`tec-networkActivity ${className}`}>
      <Spinner size='large' className='tec-networkActivitySpinner' />
      {message && (
        <Message className='tec-networkActivityMessage'>{message}</Message>
      )}
    </Popup>
  );
};
