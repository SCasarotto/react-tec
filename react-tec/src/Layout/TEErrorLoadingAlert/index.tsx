import React from 'react'

import { PanelWrapper, Panel, Title, Message, Button } from './styledComponents'

export interface TEErrorLoadingAlertProps {
	className?: string
	title?: string
	message?: string
	buttonTitle?: string
	onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}
const TEErrorLoadingAlert: React.FC<TEErrorLoadingAlertProps> = (props) => {
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

export default TEErrorLoadingAlert
