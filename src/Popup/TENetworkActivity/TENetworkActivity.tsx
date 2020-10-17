import React from 'react'

import { Popup, Spinner, Message } from './styledComponents'
import { TEPopupProps } from './../TEPopup'

export interface TENetworkActivityProps extends TEPopupProps {
	message?: string
}
export const TENetworkActivity: React.FC<TENetworkActivityProps> = (props) => {
	const { visible, className = '', message } = props

	return (
		<Popup visible={visible} className={`TENetworkActivity ${className}`}>
			<Spinner size='large' className='TENetworkActivitySpinner' />
			{message && <Message className='TENetworkActivityMessage'>{message}</Message>}
		</Popup>
	)
}
