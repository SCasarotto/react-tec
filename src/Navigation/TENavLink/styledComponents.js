import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
	${(props) => {
		const { theme } = props

		return `

			&.active{
				color: ${theme.primary}
			}
		`
	}}
`
