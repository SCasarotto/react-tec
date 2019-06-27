import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content, Title, ComponentWrapper, Subtitle } from './styledComponents'

const TETitleBar = (props) => {
	const { className, title, leftComponent, subtitle, rightComponent } = props

	return (
		<Container className={className}>
			<Content className='TETitlebarContent'>
				{title && <Title className='TETitlebarTitle'>{title}</Title>}
				{leftComponent && (
					<ComponentWrapper className='TETitlebarLeftComponent'>
						{leftComponent}
					</ComponentWrapper>
				)}
				{subtitle && <Subtitle className='TETitlebarSubtitle'>{subtitle}</Subtitle>}
				{rightComponent && (
					<ComponentWrapper className='TETitlebarRightComponent'>
						{rightComponent}
					</ComponentWrapper>
				)}
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
