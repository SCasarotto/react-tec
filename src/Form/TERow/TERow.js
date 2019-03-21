//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Row } from './styledComponents'

const TERow = (props) => <Row {...props} />

TERow.propTypes = {
	size: PropTypes.string,
	last: PropTypes.bool,
}

TERow.defaultProps = {
	size: 'full',
	last: false,
}

export default TERow
