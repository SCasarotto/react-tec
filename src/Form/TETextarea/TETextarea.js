import React from 'react'
import PropTypes from 'prop-types'

import { Textarea } from './styledComponents'

const TETextarea = (props) => {
	return <Textarea {...props} />
}

TETextarea.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}

TETextarea.defaultProps = {
	type: 'text',
	disabled: false,
}

export default TETextarea
