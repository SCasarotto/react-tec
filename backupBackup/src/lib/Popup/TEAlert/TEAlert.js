//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Popup, Title, Message, Button } from './styledComponents'

const TEAlert = (props) => {
	const { title, message, onClick, buttonTitle, children, visible, className } = props

	return (
		<Popup visible={visible} className={className}>
			<Title>{title}</Title>
			<Message>{message}</Message>
			{children}
			<Button onClick={onClick}>{buttonTitle}</Button>
		</Popup>
	)
}

TEAlert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	buttonTitle: PropTypes.string,
}

TEAlert.defaultProps = {
	buttonTitle: 'Okay',
}

export default TEAlert