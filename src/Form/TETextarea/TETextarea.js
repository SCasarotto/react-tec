import React from 'react'
import PropTypes from 'prop-types'

import { Textarea } from './styledComponents'

const TETextarea = (props) => {
	const { className = '', ...rest } = props
	return <Textarea className={`TETextarea ${className}`} {...rest} />
}

TETextarea.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}

export default TETextarea
