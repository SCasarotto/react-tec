import React from 'react'

import { PanelWrapper, Panel, Title, Message, Button } from './styledComponents'

export interface TEErrorLoadingAlertProps {
	className?: string
	title?: React.ReactNode
	message?: React.ReactNode
	buttonTitle?: string
	onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}
/**
 *
 * TEErrorLoadingAlert in a simple component built inside of a `TEPanelWrapper` and `TEPanel` typically used when there is a loading error for a whole page.
 *
 */
export const TEErrorLoadingAlert: React.FC<TEErrorLoadingAlertProps> = (props) => {
	const { className = '', title, message, onClick, buttonTitle, children } = props
	return (
		<PanelWrapper className={`TEErrorLoadingAlert ${className}`}>
			<Panel>
				{title && <Title className='TEErrorLoadingAlertTitle'>{title}</Title>}
				{message && <Message className='TEErrorLoadingAlertMessage'>{message}</Message>}
				{buttonTitle && (
					<Button onClick={onClick} className='TEErrorLoadingAlertButton'>
						{buttonTitle}
					</Button>
				)}
				{children}
			</Panel>
		</PanelWrapper>
	)
}
