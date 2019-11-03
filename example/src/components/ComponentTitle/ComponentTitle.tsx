import React from 'react'

import { Title, Icon } from './styledComponents'

interface Props {
	title: string
	link: string
}
export const ComponentTitle: React.FC<Props> = (props) => {
	const { title, link } = props
	return (
		<Title>
			{title}
			{link && (
				<a href={link} target="_blank" rel="noopener noreferrer">
					<Icon />
				</a>
			)}
		</Title>
	)
}
