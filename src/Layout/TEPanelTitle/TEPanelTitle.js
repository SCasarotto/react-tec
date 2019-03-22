//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, ComponentWrapper, Subtitle } from './styledComponents'

const TEPanelTitle = (props) => {
	const { title, leftComponent, subtitle, rightComponent } = props

	return (
		<Container>
			{title && <Title>{title}</Title>}
			{leftComponent && <ComponentWrapper>{leftComponent}</ComponentWrapper>}
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			{rightComponent && <ComponentWrapper>{rightComponent}</ComponentWrapper>}
		</Container>
	)
}

TEPanelTitle.propTypes = {
	title: PropTypes.string,
	leftComponent: PropTypes.node,
	subtitle: PropTypes.string,
	rightComponent: PropTypes.node,
}

export default TEPanelTitle
