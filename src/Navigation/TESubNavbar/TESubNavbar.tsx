import React, { ReactNode } from 'react'

import { Container, Content, Ul, Li, Link } from './styledComponents'

export interface TESubNavbarProps {
	links: {
		to: string
		activePath?: string
		exact?: boolean
		className?: string
		children?: ReactNode
	}[]
	rightComponent?: React.ReactNode
	className?: string
}
/**
 *
 * TESubNavbar is the navigational bar just under to top `TETitleBar`.
 *
 */
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
