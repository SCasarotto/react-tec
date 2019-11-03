import React from 'react'

import Codeblock from './../Codeblock'

import { Container, Title, ColumnWrapper, CodeColumn, ComponentColumn } from './styledComponents'

const ExampleBlock = (props) => {
	const { title, code, className, children } = props
	return (
		<Container className={className}>
			<Title>{title}</Title>
			<ColumnWrapper>
				<CodeColumn>
					<Codeblock>{code}</Codeblock>
				</CodeColumn>
				<ComponentColumn>{children}</ComponentColumn>
			</ColumnWrapper>
		</Container>
	)
}

export default ExampleBlock
