import styled from 'styled-components'

import TEPopup from './../TEPopup'
import TEButton from './../../Form/TEButton'

export const Popup = styled(TEPopup)`
	${(props) => {
		return `
			& > div{
				width: 90%;
				max-width: 650px;
				margin: 100px auto;
			}
		`
	}}
`
export const FormContent = styled.div`
	${(props) => {
		return `
			padding: 30px;
		`
	}}
`
export const ButtonContainer = styled.div`
	${(props) => {
		return `
			display: flex;
			align-items: center;
			justify-content: center;
		`
	}}
`
export const LeftButton = styled(TEButton)`
	${(props) => {
		const { theme } = props
		return `
			border-top: 1px solid ${theme.primary};
			border-right: 1px solid ${theme.primary};
			border-bottom: none;
			border-left: none;
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 0px;
			padding-top: 15px;
			padding-bottom: 15px;
			font-size: 18px;

			:active {
				color: ${theme.white};
				background-color: ${theme.primary};
				border-top: 1px solid ${theme.primary};
				border-right: 1px solid ${theme.primary};
				border-bottom: none;
				border-left: none;
			}
			:hover {
				color: ${theme.white};
				background-color: ${theme.primary};
				border-top: 1px solid ${theme.primary};
				border-right: 1px solid ${theme.primary};
				border-bottom: none;
				border-left: none;
			}
		`
	}}
`
export const RightButton = styled(TEButton)`
	${(props) => {
		const { theme } = props
		return `
			border-top: 1px solid ${theme.primary};
			border-right: none;
			border-bottom: none;
			border-left: 1px solid ${theme.primary};
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 20px;
			padding-top: 15px;
			padding-bottom: 15px;
			font-size: 18px;

			:active {
				color: ${theme.white};
				background-color: ${theme.primary};
				border-top: 1px solid ${theme.primary};
				border-right: none;
				border-bottom: none;
				border-left: 1px solid ${theme.primary};
			}
			:hover {
				color: ${theme.white};
				background-color: ${theme.primary};
				border-top: 1px solid ${theme.primary};
				border-right: none;
				border-bottom: none;
				border-left: 1px solid ${theme.primary};
			}
		`
	}}
`
