//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content, Title, ComponentWrapper, Subtitle } from './styledComponents'

const TETitleBar = (props) => {
	const { title, leftComponent, subtitle, rightComponent } = props

	return (
		<Container>
			<Content>
				{title && <Title>{title}</Title>}
				{leftComponent && <ComponentWrapper>{leftComponent}</ComponentWrapper>}
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
				{rightComponent && <ComponentWrapper>{rightComponent}</ComponentWrapper>}
			</Content>
		</Container>
	)
}

TETitleBar.propTypes = {
	title: PropTypes.string,
	leftComponent: PropTypes.node,
	subtitle: PropTypes.string,
	rightComponent: PropTypes.node,
}

export default TETitleBar
