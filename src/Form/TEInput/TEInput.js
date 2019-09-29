import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styledComponents'

const TEInput = (props) => {
	const { type = 'text', disabled = false, className = '', ...rest } = props
	return <Input type={type} disabled={disabled} className={`TEInput ${className}`} {...rest} />
}

TEInput.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}

export default TEInput
