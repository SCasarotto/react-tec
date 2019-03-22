import styled from 'styled-components'

import TEPopup from './../TEPopup'
import TESpinner from './../../TESpinner'

export const Popup = styled(TEPopup)`
	${(props) => {
		return `
			display: flex;
			justify-content: center;
			align-items: center;

            & > div{
				background-color: rgba(0,0,0,0.5);
				padding: 60px;
				text-align: center;
            }
        `
	}}
`
export const Spinner = styled(TESpinner)`
	${(props) => {
		return `
            margin-bottom: 30px;
        `
	}}
`
export const Message = styled.p`
	${(props) => {
		const { theme } = props
		return `
			position: relative;
			width: 100%;
			text-align: center;
			font-size: 24px;
			margin: 0px;
			color: ${theme.white};
		`
	}}
`
