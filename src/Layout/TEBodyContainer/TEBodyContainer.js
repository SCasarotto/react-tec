import React from 'react'
import PropTypes from 'prop-types'

import { BodyContainer } from './styledComponents'

const TEBodyContainer = (props) => <BodyContainer {...props} />

TEBodyContainer.propTypes = {
	sidebarWidth: PropTypes.number,
}

TEBodyContainer.defaultProps = {
	sidebarWidth: 200,
}

export default TEBodyContainer
