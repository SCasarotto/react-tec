import React from 'react'

import {
	Popup,
	Title,
	Message,
	ButtonContainer,
	LeftButton,
	RightButton,
} from './styledComponents'
import { TEPopupProps } from 'Popup/TEPopup'

export interface TEConfirmProps extends TEPopupProps {
	title?: string
	message?: string
	leftOnClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
	leftButtonTitle?: string
	rightOnClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
	rightButtonTitle?: string
}
export const TEConfirm: React.FC<TEConfirmProps> = (props) => {
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
	} = props

	return (
		<Popup visible={visible} className={`TEConfirm ${className}`}>
			{title && <Title className="TEConfirmTitle">{title}</Title>}
			{message && (
				<Message className="TEConfirmMessage">{message}</Message>
			)}
			{children}
			<ButtonContainer className="TEConfirmButtonoContainer">
				<LeftButton
					onClick={leftOnClick}
					className="TEConfirmButton TEConfirmLeftButton"
				>
					{leftButtonTitle}
				</LeftButton>
				<RightButton
					onClick={rightOnClick}
					className="TEConfirmButton TEConfirmRightButton"
				>
					{rightButtonTitle}
				</RightButton>
			</ButtonContainer>
		</Popup>
	)
}
