import React from 'react'
import PropTypes from 'prop-types'

import { PanelWrapper, Panel, Title, Message, Button } from './styledComponents'

const TEErrorLoadingAlert = (props) => {
	const { className = '', title, message, onClick, buttonTitle } = props
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
