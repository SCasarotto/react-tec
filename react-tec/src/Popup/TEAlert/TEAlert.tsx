import React from 'react'
import PropTypes from 'prop-types'

import { Popup, Title, Message, Button } from './styledComponents'

const TEAlert = (props) => {
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
			<Title className='TEAlertTitle'>{title}</Title>
			<Message className='TEAlertMessage'>{message}</Message>
			{children}
			<Button onClick={onClick} className='TEAlertButton'>
				{buttonTitle}
			</Button>
		</Popup>
	)
}

TEAlert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	buttonTitle: PropTypes.string,
}

export default TEAlert
