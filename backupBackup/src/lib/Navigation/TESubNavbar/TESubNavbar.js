//
//TE Version 0.3.0
//

import React from 'react'

import { Container, Content, Ul, Li, Link } from './styledComponents'

const TESubNavbar = (props) => {
	const { className, links, rightComponent, ...rest } = props

	return (
		<Container className={className}>
			<Content>
				<Ul>
					{links &&
						links.map((link, index) => {
							const { to, title } = link
							return (
								<Li key={index}>
									<Link {...rest} to={to}>
										{title}
									</Link>
								</Li>
							)
						})}
				</Ul>
				{rightComponent}
			</Content>
		</Container>
	)
}

export default TESubNavbar
