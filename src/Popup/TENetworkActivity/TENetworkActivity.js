import React from 'react'
import PropTypes from 'prop-types'

import { Popup, Spinner, Message } from './styledComponents'

const TENetworkActivity = (props) => {
	const { visible, className, message } = props

	return (
		<Popup visible={visible} className={className}>
			<Spinner size='large' className='TENetworkActivitySpinner' />
			{message && <Message className='TENetworkActivityMessage'>{message}</Message>}
		</Popup>
	)
}

TENetworkActivity.propTypes = {
	message: PropTypes.string,
}

export default TENetworkActivity
