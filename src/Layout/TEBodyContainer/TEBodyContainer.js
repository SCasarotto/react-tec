import React from 'react'
import PropTypes from 'prop-types'

import { BodyContainer } from './styledComponents'

const TEBodyContainer = (props) => {
	const { className = '', ...rest } = props
	return <BodyContainer className={`TEBodyContainer ${className}`} {...rest} />
}

TEBodyContainer.propTypes = {
	sidebarWidth: PropTypes.number,
}
//TODO: Not if love with this. It might be a good idea to find a better way while also introducing some default responsiveness
TEBodyContainer.defaultProps = {
	sidebarWidth: 200,
}

export default TEBodyContainer
