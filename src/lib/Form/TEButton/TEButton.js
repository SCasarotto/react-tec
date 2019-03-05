//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styledComponents'

const TEButton = (props) => {
	const { children, ...rest } = props
	return <Button {...rest}>{children}</Button>
}

TEButton.propTypes = {
	onClick: PropTypes.func,
}

TEButton.defaultProps = {
	type: 'button',
}

export default TEButton
