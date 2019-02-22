//
//TE Version 0.3.0
//

import React from 'react'

import { PanelWrapper, Panel, Title, Message, Button } from './styledComponents'

const TEErrorLoadingAlert = (props) => {
	const { title, message, onClick, buttonTitle } = props
	return (
		<PanelWrapper>
			<Panel>
				{title && <Title>{title}</Title>}
				{message && <Message>{message}</Message>}
				{buttonTitle && <Button onClick={onClick}>{buttonTitle}</Button>}
			</Panel>
		</PanelWrapper>
	)
}

export default TEErrorLoadingAlert
