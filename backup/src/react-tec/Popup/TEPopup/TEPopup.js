//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Background, Content } from './styledComponents'

const TEPopup = (props) => {
	const { visible, className, children } = props

	return (
		<Background className={className} visible={visible}>
			<Content>{children}</Content>
		</Background>
	)
}

TEPopup.propTypes = {
	visible: PropTypes.bool.isRequired,
}

TEPopup.defaultProps = {
	visible: false,
}

export default TEPopup
