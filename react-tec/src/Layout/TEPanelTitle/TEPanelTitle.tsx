import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, ComponentWrapper, Subtitle } from './styledComponents'

const TEPanelTitle = (props) => {
	const { className = '', title, leftComponent, subtitle, rightComponent } = props

	return (
		<Container className={`TEPanelTitle ${className}`}>
			{title && <Title className='TEPanelTitleTitle'>{title}</Title>}
			{leftComponent && (
				<ComponentWrapper className='TEPanelTitleLeftComponentWrapper'>
					{leftComponent}
				</ComponentWrapper>
			)}
			{subtitle && <Subtitle className='TEPanelTitleSubTitle'>{subtitle}</Subtitle>}
			{rightComponent && (
				<ComponentWrapper className='TEPanelTitleRightComponentWrapper'>
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
