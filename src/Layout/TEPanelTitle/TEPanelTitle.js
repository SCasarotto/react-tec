//
//TE Version 0.3.0
//

import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, ComponentWrapper, Subtitle } from './styledComponents'

const TEPanelTitle = (props) => {
	const { className, title, leftComponent, subtitle, rightComponent } = props

	return (
		<Container className={className}>
			{title && <Title className='TEpanelTitleTitle'>{title}</Title>}
			{leftComponent && (
				<ComponentWrapper className='TEpanelTitleLeftComponentWrapper'>
					{leftComponent}
				</ComponentWrapper>
			)}
			{subtitle && <Subtitle className='TEpanelTitleSubTitle'>{subtitle}</Subtitle>}
			{rightComponent && (
				<ComponentWrapper className='TEpanelTitleRightComponentWrapper'>
					{rightComponent}
				</ComponentWrapper>
			)}
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
