//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import TEPanelTitle from './../TEPanelTitle'

import { Container } from './styledComponents'

const TEPanel = (props) => {
	const {
		size,
		className,

		title,
		leftComponent,
		subtitle,
		rightComponent,

		children,
	} = props
	return (
		<Container className={className} size={size}>
			{(title || leftComponent || subtitle || rightComponent) && (
				<TEPanelTitle
					title={title}
					leftComponent={leftComponent}
					subtitle={subtitle}
					rightComponent={rightComponent}
					className='TEPanelTitleBar'
				/>
			)}
			{children}
		</Container>
	)
}

TEPanel.propTypes = {
	size: PropTypes.string,
}

TEPanel.defaultProps = {
	size: 'full',
}

export default TEPanel
