import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Li = styled.li`
	list-style: none;
`
export const Link = styled(NavLink)`
	display: block;
	color: ${(props) => props.theme.darkerGray};
	padding: 15px 20px;
	cursor: pointer;
	border-left: 5px solid transparent;
	transition: color 0.2s ease-in, border 0.2s ease-in;
	text-decoration: none;

	:active,
	:hover,
	&.active {
		color: ${(props) => props.theme.primary};
		border-color: ${(props) => props.theme.primary};
	}
`
export const Title = styled.span`
	font-size: 18px;
`
