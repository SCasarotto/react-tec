//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

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

TEErrorLoadingAlert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onClick: PropTypes.func,
	buttonTitle: PropTypes.string,
}

export default TEErrorLoadingAlert
