import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content, Ul, Li, Link } from './styledComponents'

const TESubNavbar = (props) => {
	const { links, rightComponent, className } = props

	return (
		<Container className={className}>
			<Content className='TESubNavbarContent'>
				<Ul className='TESubNavbarUl'>
					{links &&
						links.map((link, index) => {
							return (
								<Li key={index} className='TESubNavbarLi'>
									<Link className='TESubNavbarLink' {...link} />
								</Li>
							)
						})}
				</Ul>
				{rightComponent}
			</Content>
		</Container>
	)
}

TESubNavbar.propTypes = {
	links: PropTypes.array,
	rightComponent: PropTypes.node,
}

export default TESubNavbar
