import React from 'react'
import PropTypes from 'prop-types'

import { Row } from './styledComponents'

const TERow = (props) => {
	const { size = 'full', last = false, className = '', ...rest } = props
	return <Row className={`TERow ${className}`} size={size} last={last} {...rest} />
}

TERow.propTypes = {
	size: PropTypes.string,
	last: PropTypes.bool,
}

export default TERow
