//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Popup, Spinner, Message } from './styledComponents'

const TENetworkActivity = (props) => {
	const { visible, className, message } = props

	return (
		<Popup visible={visible} className={className}>
			{visible && <Spinner size="large" />}
			{message && <Message>{message}</Message>}
		</Popup>
	)
}

TENetworkActivity.propTypes = {
	message: PropTypes.string,
}

export default TENetworkActivity
