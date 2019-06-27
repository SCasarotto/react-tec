import React from 'react'
import PropTypes from 'prop-types'

import { Label } from './styledComponents'

const TELabel = (props) => {
	const { children, required, ...rest } = props
	return (
		<Label {...rest}>
			{children}
			{required ? ' *' : ''}
		</Label>
	)
}

TELabel.propTypes = {
	htmlFor: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
}

export default TELabel
