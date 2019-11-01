import React from 'react'

import {
	Container,
	Content,
	Title,
	ComponentWrapper,
	Subtitle,
} from './styledComponents'

export interface TETitleBarProps {
	className?: string
	title?: string
	leftComponent?: React.ReactNode
	subtitle?: string
	rightComponent?: React.ReactNode
}
const TETitleBar: React.FC<TETitleBarProps> = (props) => {
	const {
		className = '',
		title,
		leftComponent,
		subtitle,
		rightComponent,
	} = props

	return (
		<Container className={`TETitleBar ${className}`}>
			<Content className="TETitlebarContent">
				{title && <Title className="TETitlebarTitle">{title}</Title>}
				{leftComponent && (
					<ComponentWrapper className="TETitlebarLeftComponent">
						{leftComponent}
					</ComponentWrapper>
				)}
				{subtitle && (
					<Subtitle className="TETitlebarSubtitle">
						{subtitle}
					</Subtitle>
				)}
				{rightComponent && (
					<ComponentWrapper className="TETitlebarRightComponent">
						{rightComponent}
					</ComponentWrapper>
				)}
			</Content>
		</Container>
	)
}

export default TETitleBar
