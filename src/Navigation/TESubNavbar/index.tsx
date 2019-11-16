import React from 'react'

import { Container, Content, Ul, Li, Link } from './styledComponents'
import { TESideNavLinkProps } from 'Navigation/TESideNavLink'

export interface TESubNavbarProps {
	links: TESideNavLinkProps[]
	rightComponent?: React.ReactNode
	className?: string
}
export const TESubNavbar: React.FC<TESubNavbarProps> = (props) => {
	const { links, rightComponent, className = '' } = props

	return (
		<Container className={`TESubNavbar ${className}`}>
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
