import React from 'react'

import { Codeblock } from '../Codeblock'

import {
	Container,
	Title,
	ColumnWrapper,
	CodeColumn,
	ComponentColumn,
} from './styledComponents'

interface Props {
	title: string
	code: string
	className?: string
}
export const ExampleBlock: React.FC<Props> = (props) => {
	const { title, code, className = '', children } = props
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
