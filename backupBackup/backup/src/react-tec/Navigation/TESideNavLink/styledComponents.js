import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Li = styled.li`
	${(props) => {
		return `
            list-style: none;
        `
	}}
`
export const Link = styled(NavLink)`
	${(props) => {
		const { theme } = props
		return `
			display: block;
			color: ${theme.darkGray};
			padding: 15px 20px;
			cursor: pointer;
			border-left: 5px solid transparent;
			transition: color 0.2s ease-in, border 0.2s ease-in;
			text-decoration: none;

			:active {
				color: ${theme.primary};
				border-color: ${theme.primary};
			}
			:hover {
				color: ${theme.primary};
				border-color: ${theme.primary};
			}
			&.active{
				color: ${theme.primary};
				border-color: ${theme.primary};
			}
        `
	}}
`
export const Title = styled.span`
	${(props) => {
		return `
        	font-size: 18px;
        `
	}}
`
