import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styledComponents'

const TEInput = (props) => {
	return <Input {...props} />
}

TEInput.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
}

TEInput.defaultProps = {
	type: 'text',
	disabled: false,
}

export default TEInput
