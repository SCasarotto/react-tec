import React from 'react'

import { Title, Icon } from './styledComponents'

const ComponentTitle = (props) => {
	const { title, link } = props
	return (
		<Title>
			{title}
			{link && (
				<a href={link} target='_blank' rel='noopener noreferrer'>
					<Icon />
				</a>
			)}
		</Title>
	)
}

export default ComponentTitle
