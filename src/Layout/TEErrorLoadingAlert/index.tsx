import React from 'react'

import { PanelWrapper, Panel, Title, Message, Button } from './styledComponents'

export interface TEErrorLoadingAlertProps {
	className?: string
	title?: React.ReactNode
	message?: React.ReactNode
	buttonTitle?: string
	onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}
export const TEErrorLoadingAlert: React.FC<TEErrorLoadingAlertProps> = (
	props,
) => {
	const { className = '', title, message, onClick, buttonTitle } = props
	return (
		<PanelWrapper className={`TEErrorLoadingAlert ${className}`}>
			<Panel>
				{title && (
					<Title className="TEErrorLoadingAlertTitle">{title}</Title>
				)}
				{message && (
					<Message className="TEErrorLoadingAlertMessage">
						{message}
					</Message>
				)}
				{buttonTitle && (
					<Button
						onClick={onClick}
						className="TEErrorLoadingAlertButton">
						{buttonTitle}
					</Button>
				)}
			</Panel>
		</PanelWrapper>
	)
}
