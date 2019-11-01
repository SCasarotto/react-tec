import React from 'react'

import { Popup, Title, Message, Button } from './styledComponents'
import { TEPopupProps } from 'Popup/TEPopup'

export interface TEAlertProps extends TEPopupProps {
	title?: string
	message?: string
	onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
	buttonTitle?: string
}
const TEAlert: React.FC<TEAlertProps> = (props) => {
	const {
		title,
		message,
		onClick,
		buttonTitle = 'Okay',
		visible,
		className = '',
		children,
	} = props

	return (
		<Popup visible={visible} className={`TEAlert ${className}`}>
			<Title className="TEAlertTitle">{title}</Title>
			<Message className="TEAlertMessage">{message}</Message>
			{children}
			<Button onClick={onClick} className="TEAlertButton">
				{buttonTitle}
			</Button>
		</Popup>
	)
}

export default TEAlert
