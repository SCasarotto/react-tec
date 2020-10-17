import React from 'react'

import { Container, Title, ComponentWrapper, Subtitle } from './styledComponents'

export interface TEPanelTitleProps {
	className?: string
	title?: string
	leftComponent?: React.ReactNode
	subtitle?: string
	rightComponent?: React.ReactNode
}
export const TEPanelTitle: React.FC<TEPanelTitleProps> = (props) => {
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
